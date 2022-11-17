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

    @NotBlank(message= "아이디를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class )
    private String username;

    @NotBlank(message= "비번를 비워 둘 수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=8, max=16, message = "8~16자 사이", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
                message = "비밀번호는 숫자, 영문, 특수기호를 하나 이상 포함하여 작성해야합니다",
                groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    @NotBlank(message= "이름를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2,max=3, message = "2~3자 사이", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([가-힇])*$", message = "한글만 가능합니다.",groups = ValidationGroups.PatternCheckGroup.class)
    private String name;

    @NotBlank(message= "첫번를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2, max=4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "첫번째 번호숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String firstPhone;

    @NotBlank(message= "뒷번를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2, max=4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "마지막 번호 숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String lastPhone;

    @Email
    @NotBlank(message= "잘못를 비워 둘 수 없습니다.")
    private String email;

    public Member toUserEntity() {
        return Member.builder()
                .username(email)
                .password(new BCryptPasswordEncoder().encode(password))
                .name(name)
                .phone(firstPhone + lastPhone)
                .email(email)
                .role_id(1)
                .build();
    }


}
