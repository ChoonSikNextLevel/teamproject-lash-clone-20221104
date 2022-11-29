package com.lash.lashClone.controller.api;


import com.lash.lashClone.aop.annotation.LogAspect;
import com.lash.lashClone.aop.annotation.ValidAspect;
import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.account.AddressReqDto;
import com.lash.lashClone.dto.account.RegisterReqDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.dto.validation.ValidationSequence;
import com.lash.lashClone.service.AccountService;
import com.lash.lashClone.service.AddressService;
import com.lash.lashClone.service.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/account")
@RestController
@RequiredArgsConstructor
public class AccountApi {
    private final AccountService accountService;
    private final AddressService addressService;

    @LogAspect
    @ValidAspect
    @PostMapping("/join")
    public ResponseEntity<?> register(@Validated(ValidationSequence.class) @RequestBody RegisterReqDto registerReqDto, BindingResult bindingResult) throws Exception {

        accountService.checkDuplicateEmail(registerReqDto.getUsername());
        accountService.join(registerReqDto);

        return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully join", registerReqDto));
    }
    @PostMapping("/shippingAddressRegistration")
    public ResponseEntity<?> addAddress(AddressReqDto addressReqDto, @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        String username = principalDetails.getMember().getUsername();

        return ResponseEntity.created(null)
                .body(new CMRespDto<>(1, "success", addressService.addAddress(addressReqDto, username)));
    }

    @GetMapping("/shippingAddress")
    public ResponseEntity<?> addressList(@AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", addressService.addressList(principalDetails.getMember().getUsername())));


        }
    @DeleteMapping("/shippingAddress/{addressId}")
    public ResponseEntity<?> deleteProduct(@PathVariable int addressId) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", addressService.deleteAddress(addressId)));
    }

        @GetMapping("/principal/member")
    public ResponseEntity<?> getPrincipalMember(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully get principal", principalDetails == null ? "" : principalDetails));
    }
//    @GetMapping("/principal/Address")
//    public ResponseEntity<?> getPrincipalAddress(@AuthenticationPrincipal PrincipalDetails principalDetails) {
//        return ResponseEntity.ok().body(new CMRespDto<>(1, "Successfully get principal", principalDetails == null ? "" : principalDetails));
//    }


}
