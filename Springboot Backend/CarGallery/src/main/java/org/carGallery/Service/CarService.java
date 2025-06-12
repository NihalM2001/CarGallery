package org.carGallery.Service;

import java.util.List;

import org.carGallery.Entity.CarDetails;
import org.carGallery.Repository.CarDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CarService {
	@Autowired
	CarDetailsRepository carRepo;	
	
	public CarDetails saveCar(@RequestBody CarDetails carDet) {
		return carRepo.save(carDet);
	}
	
	public void deleteCar(int id) {
		carRepo.deleteById(id);
	}
	
	public List<CarDetails> listCars()
	{
		return carRepo.findAll();
	}
}
