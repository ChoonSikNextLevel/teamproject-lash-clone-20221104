package com.lash.lashClone.config;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class securityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                .antMatchers("/account/login" ,"/account/join")
                .permitAll()

                .antMatchers("/api/account/join","/api/account/join")
                .permitAll()

                .and()

                .formLogin()//Form 로그인 인증 기능이 작동함
                .loginPage("/account/login")//사용자 정의 로그인 페이지
                .defaultSuccessUrl("/index")//로그인 성공 후 이동 페이지
                .failureUrl("/account/login")// 로그인 실패 후 이동 페이지
                .usernameParameter("email")//아이디 파라미터명 설정
//                .passwordParameter("")//패스워드 파라미터명 설정
                .loginProcessingUrl("/account/login")//로그인 Form Action Url
//                .successHandler(loginSuccessHandler())//로그인 성공 후 핸들러 (해당 핸들러를 생성하여 핸들링 해준다.)
//                .failureHandler(loginFailureHandler())//로그인 실패 후 핸들러 (해당 핸들러를 생성하여 핸들링 해준다.)
                .permitAll(); //사용자 정의 로그인 페이지 접근 권한 승인



    }
}

