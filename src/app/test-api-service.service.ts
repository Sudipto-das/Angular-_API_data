import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestApiServiceService {

  constructor(private http:HttpClient) { }
  getapi(){
  return this.http.get('https://foodrestro.glitch.me/api/foods')
  }
}
