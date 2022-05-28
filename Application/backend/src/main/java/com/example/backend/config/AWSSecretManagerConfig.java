package com.example.backend.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.secretsmanager.AWSSecretsManager;
import com.amazonaws.services.secretsmanager.AWSSecretsManagerClientBuilder;
import com.amazonaws.services.secretsmanager.model.*;
import com.example.backend.secrets.AWSCredentials;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AWSSecretManagerConfig {

    private Gson gson = new Gson();

    @Value("${cloud.aws.credentials.access_key}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secret_access_key}")
    private String accessSecret;

    @Value("${cloud.aws.s3.region}")
    private String region;

    private AWSCredentials getSecret() {

        String secretName = "arn:aws:secretsmanager:us-east-1:163009082563:secret:aws-credentials-n4xG53";
        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, accessSecret);
        AWSSecretsManager client  = AWSSecretsManagerClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

        String secret = "";
        GetSecretValueRequest getSecretValueRequest = new GetSecretValueRequest()
                .withSecretId(secretName);
        GetSecretValueResult getSecretValueResult = null;

        try {
            getSecretValueResult = client.getSecretValue(getSecretValueRequest);
        } catch (Exception e) {
            throw e;
        }

        if (getSecretValueResult.getSecretString() != null) {
            secret = getSecretValueResult.getSecretString();
            return gson.fromJson(secret, AWSCredentials.class);
        }

        return null;
    }

}
