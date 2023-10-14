import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from '../models/Entry';
import { data } from '../mocks/mock-data'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    // const url = 'https://v82ianldk3.execute-api.eu-central-1.amazonaws.com/dev/people';
    // return this.http.get<string>(url);
   return data;
  }
}

//todo: convert dates from string to date
