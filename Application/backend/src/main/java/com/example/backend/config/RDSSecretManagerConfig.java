package com.example.backend.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.secretsmanager.AWSSecretsManager;
import com.amazonaws.services.secretsmanager.AWSSecretsManagerClientBuilder;
import com.amazonaws.services.secretsmanager.model.*;
import com.example.backend.secrets.RDSCredentials;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class RDSSecretManagerConfig {

    private Gson gson = new Gson();

    @Value("${cloud.aws.credentials.access_key}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secret_access_key}")
    private String accessSecret;

    @Value("${cloud.aws.s3.region}")
    private String region = "us-east-1";

//    @Bean
//    public DataSource getDataSource() {
//        RDSCredentials secrets = getSecret();
//        return DataSourceBuilder
//                .create()
//                .driverClassName("org.postgresql.Driver")
//                .url("jdbc:" + "postgresql" + "://" + secrets.getHost() + ":" + secrets.getPort() + "/postgres")
//                .username(secrets.getUsername())
//                .password(secrets.getPassword())
//                .build();
//    }

     private RDSCredentials getSecret() {
          String secretName = "arn:aws:secretsmanager:us-east-1:163009082563:secret:cinematicdb-credentials-51WLg7";

          BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, accessSecret);
          AWSSecretsManager client  = AWSSecretsManagerClientBuilder.standard()
                   .withRegion(region)
                   .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                   .build();

           String secret= "";
           GetSecretValueRequest getSecretValueRequest = new GetSecretValueRequest().withSecretId(secretName);
           GetSecretValueResult getSecretValueResult = null;

           try {
                   getSecretValueResult = client.getSecretValue(getSecretValueRequest);
           } catch (DecryptionFailureException e) {
                   throw e;
           } catch (InternalServiceErrorException e) {
                   throw e;
           } catch (InvalidParameterException e) {
                   throw e;
           } catch (InvalidRequestException e) {
                   throw e;
           } catch (ResourceNotFoundException e) {
                   throw e;
           }

           if (getSecretValueResult.getSecretString() != null) {
               secret = getSecretValueResult.getSecretString();
               return gson.fromJson(secret, RDSCredentials.class);
           }

           return null;
     }
}