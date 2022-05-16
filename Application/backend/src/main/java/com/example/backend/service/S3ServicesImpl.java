package com.example.backend.service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;

import com.example.backend.service.interfaces.S3Services;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@AllArgsConstructor
@Service
public class S3ServicesImpl implements S3Services {

    private final AmazonS3 s3Client;

    @Value("${cloud.aws.s3.bucket}")
    private final String bucketName = "cinematic-images";

    @Override
    public ByteArrayOutputStream downloadFile(String keyName) {
        try {
            S3Object s3object = s3Client.getObject(new GetObjectRequest(bucketName, keyName));
            InputStream is = s3object.getObjectContent();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            int len;
            byte[] buffer = new byte[4096];
            while ((len = is.read(buffer, 0, buffer.length)) != -1)
                baos.write(buffer, 0, len);

            return baos;
        } catch (IOException ioe) {
            ioe.printStackTrace();
        } catch (AmazonServiceException ase) {
            throw ase;
        } catch (AmazonClientException ace) {
            throw ace;
        }
        return null;
    }

    @Override
    public String saveFileToS3(String keyName, String base64Data) {
        byte[] bI = org.apache.commons.codec.binary.Base64.decodeBase64((base64Data.substring(base64Data.indexOf(",")+1)).getBytes());
        InputStream fis = new ByteArrayInputStream(bI);
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(bI.length);
        metadata.setContentType("image/png");
        metadata.setCacheControl("public, max-age=31536000");
        s3Client.putObject(bucketName, keyName, fis, metadata);
        return s3Client.getUrl(bucketName, keyName).toString();
    }
}
