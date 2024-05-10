import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string= ""; 
  weatherData: any; 
  isFilled: boolean = false;

  constructor(private weatherService: WeatherService){}
  checkValue() { 
    if (this.city!="") {
      this.isFilled=true; 
    }
  }
  getWeather() {
    this.weatherService.getWeather(this.city)
    .subscribe(data => { 
      this.weatherData= data; 
      console.log(data)
    })
  }

}
