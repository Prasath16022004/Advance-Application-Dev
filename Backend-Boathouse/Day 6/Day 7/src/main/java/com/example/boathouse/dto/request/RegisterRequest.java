// package com.example.boathouse.dto.request;

// public class RegisterRequest {
    
// }



package com.example.boathouse.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String name;
    private String email;
    private String mobileNumber;
    private String password;
}
