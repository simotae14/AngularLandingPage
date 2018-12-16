import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'https://jsonplaceholder.typicode.com/posts';

  constructor(private  httpClient:  HttpClient) {}

  getPosts(){
    return  this.httpClient.get(`${this.API_URL}`);
  }
}
