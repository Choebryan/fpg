// package com.foolproofgolf.fpg;

// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.foolproofgolf.fpg.db.UserRepository;
// import com.foolproofgolf.fpg.model.User;
// import com.foolproofgolf.fpg.service.UserService;


// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @Autowired
//     private UserRepository userRepository;

//     @PostMapping("/newUser")
//     public User newUser(@RequestBody User user) {
//         return userService.saveUser(user);
//     }

//     @GetMapping("/{username}")
//     public ResponseEntity<User> getUserById(@PathVariable String username) {
//         Optional<User> user = userService.getUserByUsername(username);

//         if (user.isEmpty()) {
//             return ResponseEntity.notFound().build();
//         }
        

//         return user;
//     }


//     // public ResponseEntity<String> allUsers() {
//     //     return new ResponseEntity<String>( "All Users", HttpStatus.OK);
//     // }

// }
