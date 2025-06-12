package org.carGallery.Service;

import org.carGallery.Entity.UserDetails;
import org.carGallery.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Service
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserService {
	@Autowired
	UserRepository userRepo;
	
	public UserDetails addUser(@RequestBody UserDetails userDet) {
		return userRepo.save(userDet);
	}
}
