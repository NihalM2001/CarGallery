package org.carGallery.Repository;

import org.carGallery.Entity.CarDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarDetailsRepository extends JpaRepository<CarDetails, Integer> {

}
