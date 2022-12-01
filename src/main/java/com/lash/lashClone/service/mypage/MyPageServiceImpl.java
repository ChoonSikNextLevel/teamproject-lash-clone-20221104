package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;

import com.lash.lashClone.repository.account.MyPageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService {
    private final MyPageRepository myPageRepository;
    // 마이페이지 이름
    @Override
    public Member memberList(String username) throws Exception {
        return myPageRepository.memberList(username);
    }
}