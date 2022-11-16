package com.lash.lashClone.dto.account;


import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {

//    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
//    private String username;
    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=8, max=16, message = "8~16자 사이", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
                message = "비밀번호는 숫자, 영문, 특수기호를 하나 이상 포함하여 작성해야합니다",
                groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2, message = "1~3자 사이", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([가-힇])*$", message = "한글만 가능합니다.", groups = ValidationGroups.PatternCheckGroup.class)
    private String name;

    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=4, max=4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
            message = "숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String firstPhone;

    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=4, max=4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
            message = "숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String lastPhone;

    @Email
    @NotBlank(message= ".." , groups = ValidationGroups.NotBlankGroup.class)
    private String email;

//    public Member toUserEntity() {
//        return Member.builder()
//                .username(email)
//                .password(new BCryptPasswordEncoder().encode(password))
//                .name(name)
//                .phone(firstPhone + lastPhone)
//                .email(email)
//                .role_id(1)
//                .build();
//    }


}
