package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;

import java.util.List;

public interface MyPageService {
    // 마이페이지 아이디정보
    public Member memberList(String username) throws Exception;
}
