import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public async getCars() {
    return this.cars;
  }

  public postCar(car) {
    return this.cars.push(car);
  }
  public getcarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const car = this.cars.find((car) => car.id === carId);
      if (!car) {
        throw new HttpException('No car', 404);
      }
      return resolve(car);
    });
  }
  public deleteCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const carIndex = this.cars.findIndex((car) => car.id === carId);
      if (carIndex === -1) {
        throw new HttpException('No car', 404);
      }
      this.cars.splice(carIndex);
      return resolve(this.cars);
    });
  }
  public putCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const carIndex = this.cars.findIndex((car) => car.id === carId);
      if (carIndex === -1) {
        throw new HttpException('No car', 404);
      }
      this.cars[carIndex][propertyName] = propertyValue;
      return resolve(this.cars[carIndex]);
    });
  }
}
