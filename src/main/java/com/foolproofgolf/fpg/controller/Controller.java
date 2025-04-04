// package com.foolproofgolf.fpg.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.foolproofgolf.fpg.model.FormData;
// import com.foolproofgolf.fpg.service.EmailService;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// public class Controller {

//     // @PostMapping("/signup")
//     // public ResponseEntity<String> newUser(@RequestBody UserData userData) {

//     // }



    
//     @Autowired
//     private EmailService emailService;

//     @PostMapping("/submitForm")
//     @CrossOrigin(origins = "http://localhost:3000")
//     public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
//         String emailBody = "First Name: " + formData.getFirstName() + "\n" +
//                             "Last Name: " + formData.getLastName() + "\n" +
//                             "Phone Number: " + formData.getPhoneNumber() + "\n" +
//                             "Email: " + formData.getEmail() + "\n" +
//                             "Lesson Type: " + formData.getLessonType();


//         try {
//             emailService.sendEmailWithFormData(formData);
//             return ResponseEntity.ok("Form submitted successfully");
//         } catch (Exception e) {
//             return ResponseEntity.status(500).body("Failed to submit form: " + e.getMessage());
//         }

//         // try {
//         //     emailService.sendEmail("choebryan3@gmail.com", "New Lesson Booking", emailBody);
//         //     System.out.println(emailBody, "email sent");
//         //     return ResponseEntity.ok("Form submitted successfully");
//         // } catch (Exception e) {
//         //     return ResponseEntity.status(500).body("Failed to submit form: " + e.getMessage());
//         // }

//         // emailService.sendEmail("choebryan3@gmail.com", "New Lesson Booking", emailBody);
//         // return ResponseEntity.ok("Form submitted successfully");
//     }
// }
