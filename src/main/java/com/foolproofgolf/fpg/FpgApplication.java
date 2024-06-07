package com.foolproofgolf.fpg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.foolproofgolf.fpg.service.EmailService;

@SpringBootApplication
public class FpgApplication {

	@Autowired
	private EmailService senderService;

	public static void main(String[] args) {
		SpringApplication.run(FpgApplication.class, args);
	}

	// @EventListener(ApplicationReadyEvent.class)
	// public void sendMail() {
	// 	senderService.sendEmail("choebryan3@gmail.com", "Lesson Booked", "hello");
	// }
}
