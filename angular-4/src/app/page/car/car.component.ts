import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  list$: Observable<Car[]> = this.car.getAll();
  constructor(
    private car: CarService
  ) { }

  ngOnInit(): void {
  }

}
