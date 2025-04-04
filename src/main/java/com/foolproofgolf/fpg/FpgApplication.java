package com.foolproofgolf.fpg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FpgApplication {

	// @Autowired
	// private EmailService senderService;

	public static void main(String[] args) {

		// Dotenv dotenv = Dotenv.configure().load();

		SpringApplication.run(FpgApplication.class, args);
	}


	

	// @EventListener(ApplicationReadyEvent.class)
	// public void sendMail() {
	// 	senderService.sendEmail("choebryan3@gmail.com", "Lesson Booked", "hello");
	// }
}
