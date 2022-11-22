package com.lash.lashClone.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    private String address_name;
    private String recipient;
    private String land_phone;
    private String mobile_phone;
    private String Address;
    private String Address_detail;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
