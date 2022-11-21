package com.lash.lashClone.service.auth;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.repository.account.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2AuthorizationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;


@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalOauth2Service extends DefaultOAuth2UserService {

    private final AccountRepository accountRepository;

    @Override
    public OAuth2User
     loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        String priovider = userRequest.getClientRegistration().getClientName();
        OAuth2User oAuth2User = super.loadUser(userRequest);

        log.info("userRequest >>> {}", userRequest);
        log.info("getClientRegistration >>> {}", userRequest.getClientRegistration());
        log.info("getAttributes >>> {}", oAuth2User.getAttributes());

        Member member = getOauth2User(priovider, oAuth2User.getAttributes());

        return new PrincipalDetails(member, oAuth2User.getAttributes());

    }
    private Member getOauth2User(String provider, Map<String, Object> attributes) {
        String oauth2_id =null;
        String id = null;
        String email = null;
        String phone = null;


        Member member = null;

        Map<String, Object> response = null;

        if(provider.equalsIgnoreCase("KaKao")) {
            Map<String, Object>account = (Map<String, Object>) attributes.get("kakao_account");
            Map<String, Object>profile = (Map<String, Object>) attributes.get("profile");
        }else if(provider.equalsIgnoreCase("naver")) {
            response = (Map<String, Object>) attributes.get("response");
            id = (String) response.get("id");
        }if(provider.equalsIgnoreCase("facebook")) {
            id = (String)response.get("sub");
        }

        oauth2_id = provider + "_" + id;
        email = (String) response.get("email");

        member = accountRepository.findUserByEmail(email);
        if(member == null) {
            member = member.builder()
                    .username(email)
                    .oauth_username(oauth2_id)
                    .password(new BCryptPasswordEncoder().encode(UUID.randomUUID().toString().replaceAll("-", "")))
                    .name((String) response.get("name"))
                    .email(email)
                    .phone(phone)
                    .role_id(1)
                    .provider(provider)
                    .build();

            accountRepository.save(member);

        }else if(member.getOauth_username()== null) {
            member.setOauth_username(oauth2_id);
            member.setProvider(provider);
            accountRepository.updateMemberOauth2(member);
        }

        return member;

    }
}
