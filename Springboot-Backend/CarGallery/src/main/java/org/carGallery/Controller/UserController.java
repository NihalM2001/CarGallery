package org.carGallery.Controller;

import org.carGallery.Entity.UserDetails;
import org.carGallery.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/home")
	public String home() {
		return "Hello there";
	}
	
	@PostMapping("/saveUser")
	@CrossOrigin(origins = "https://cerulean-melomakarona-1d65e2.netlify.app")
	public UserDetails saveUser(@RequestBody UserDetails userDet ) {
		return service.addUser(userDet);
	}
}
