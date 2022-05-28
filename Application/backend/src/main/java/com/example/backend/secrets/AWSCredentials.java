package com.example.backend.secrets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AWSCredentials {

    private String awsAccessKeyID;
    private String awsSecretAccessKey;
}
