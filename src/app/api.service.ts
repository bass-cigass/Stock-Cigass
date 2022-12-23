import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient : HttpClient) { }

  API_SERVER = "http://localhost:3000";

}
