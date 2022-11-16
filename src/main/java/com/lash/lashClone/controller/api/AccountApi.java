package com.lash.lashClone.controller.api;


import com.lash.lashClone.dto.account.RegisterReqDto;
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
public class AccountApi {

    @PostMapping("/join")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterReqDto registerReqDto, BindingResult bindingResult) throws Exception {

        if(bindingResult.hasErrors()){
            log.error("유효성 검사 오류 발생");

            bindingResult.getFieldErrors().forEach(error -> {
                log.info("Error: 필드명({}), 메시지({})", error.getField(), error.getDefaultMessage());
            });
        }

        log.info("{}", registerReqDto);

        return ResponseEntity.ok(null);

    }
}
