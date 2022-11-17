package com.lash.lashClone.repository.account;


import com.lash.lashClone.domain.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {
    public int save(Member member);

    public int updateUserOauth2(Member member);
    public  Member findUserByEmail(String Email);
}
