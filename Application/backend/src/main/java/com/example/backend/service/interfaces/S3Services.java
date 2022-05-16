package com.example.backend.service.interfaces;

import java.io.ByteArrayOutputStream;


public interface S3Services {

    ByteArrayOutputStream downloadFile(String keyName);
    String saveFileToS3(String keyName, String base64Image);
}
