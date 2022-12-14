import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:8085/savestudent";
const BASE_URL1 = "http://localhost:8085/allstudents}";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents()
  {
    return this.http.get(BASE_URL1)
  }
  saveStudent(student: {firstname:string; lastname:string; subject:string;dateofbirth:Date;studentClass:string}){
    return this.http.post(BASE_URL,student);
  }
  constructor(public http: HttpClient) { }
}
