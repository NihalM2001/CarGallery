package org.carGallery.Controller;

import java.util.List;

import org.carGallery.Entity.CarDetails;
import org.carGallery.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {
	@Autowired
	CarService carSer;
	
	@PostMapping("/saveCar")
	@CrossOrigin(origins = "https://cerulean-melomakarona-1d65e2.netlify.app")
	public CarDetails saveCar(@RequestBody CarDetails carDet) {
		return carSer.saveCar(carDet); 
	}
	
	@GetMapping("/deleteCar/{id}")
	@CrossOrigin(origins = "https://cerulean-melomakarona-1d65e2.netlify.app")
	public void deleteCar(@PathVariable("id") int id) {
		carSer.deleteCar(id);
	}
	
	@GetMapping("/listCar")
	@CrossOrigin(origins = "https://cerulean-melomakarona-1d65e2.netlify.app")
	public List<CarDetails> listCars(){
		return carSer.listCars();
	}
	
}
