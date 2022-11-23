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
    private int address_id;
    private int member_id;
    private String address_name;
    private String recipient;
    private String land_phone;
    private String mobile_phone;
    private String address_number;
    private String address;
    private String address_detail;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
