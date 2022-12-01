package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.UserUpdateReqDto;


public interface UserService {
//    //유저 정보 수정
public Member updateUser(UserUpdateReqDto userUpdateReqDto) throws Exception;

    //유저 정보 찾기
    public Member getUser(String username) throws Exception;


    //-----------유저 정보------------------
}
