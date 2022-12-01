package com.lash.lashClone.dto.account;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.User;
import lombok.Data;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchProperties;

@Data
public class UserUpdateReqDto {
    private int memberId;
    private String username;
    private String password;
    private String name;
    private String addressNumber;
    private String address;
    private String addressDetail;
    private String firstPhone;
    private String lastPhone;
    private String email;
    public Member userEntity() {
        return Member.builder()
                .password(password)
                .name(name)
                .phone("010" + firstPhone + lastPhone)
                .email(email)
                .build();
    }
}
