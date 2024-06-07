package com.foolproofgolf.fpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.foolproofgolf.fpg.model.FormData;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender emailSender;

    public void sendEmailWithFormData(FormData formData) {
        String emailBody = "First Name: " + formData.getFirstName() + "\n" +
                            "Last Name: " + formData.getLastName() + "\n" +
                            "Phone Number: " + formData.getPhoneNumber() + "\n" +
                            "Email: " + formData.getEmail() + "\n" +
                            "Lesson Type: " + formData.getLessonType();

        sendEmail("choebryan3@gmail.com", "Lesson Booked", emailBody);
    }

    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("choebryan3@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
}
