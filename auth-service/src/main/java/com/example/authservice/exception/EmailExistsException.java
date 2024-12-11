package com.example.authservice.exception;

public class EmailExistsException extends RuntimeException{

    public EmailExistsException(String exception){
        super(exception);
    }
}
