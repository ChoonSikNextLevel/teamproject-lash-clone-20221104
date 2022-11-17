package com.lash.lashClone.controller.api;


import com.lash.lashClone.aop.annotation.LogAspect;
import com.lash.lashClone.aop.annotation.ValidAspect;
import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.account.RegisterReqDto;
import com.lash.lashClone.dto.validation.ValidationSequence;
import com.lash.lashClone.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RequestMapping("/api/account")
@RestController
@RequiredArgsConstructor
public class AccountApi {
    private final AccountService accountService;

    @LogAspect
    @ValidAspect
    @PostMapping("/join")
    public ResponseEntity<?> register(@Validated(ValidationSequence.class) @RequestBody RegisterReqDto registerReqDto, BindingResult bindingResult) throws Exception {

        accountService.checkDuplicateEmail(registerReqDto.getEmail());
        accountService.join(registerReqDto);

        return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully join", registerReqDto));
    }

}
