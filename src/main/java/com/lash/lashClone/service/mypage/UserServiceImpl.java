package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.UserUpdateReqDto;
import com.lash.lashClone.repository.account.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    //--------------유저 정보 수정----------------
    @Override
    public Member updateUser(UserUpdateReqDto userUpdateReqDto) throws Exception {
        return userRepository.updateUser(userUpdateReqDto.userEntity());
    }
    //-----------유저 정보------------------
    @Override
    public Member getUser(String username) throws Exception {
        System.out.println(username);
        return userRepository.getUser(username);
    }
}
