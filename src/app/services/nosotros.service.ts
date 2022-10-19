import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private api:HttpClient) { }
  //el nombre api es el que elijo para el modulo httpclient

  getData(){
    //api de jsonplaceholder
    //return this.api.get('https://jsonplaceholder.typicode.com/users');

    //api de prueba con express
    return this.api.get('http://localhost:8080/pil')

    //api meme generator

    


  }
}
