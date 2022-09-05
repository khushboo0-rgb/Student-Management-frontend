import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements OnInit {
  title = "fill all the details below";
  student: Student= new Student();
  students: Student[] = [];
  save()
  {
    
    // // const observable = this.studentService.saveStudent(this.student);
    // observable.subscribe(
    //   (response: any) => {
    //     console.log(response);
    //   }


    // )
  }
  constructor( public studentService: StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => 
    {
      console.log(response);
      this.students = response as Student[];}
  )

}

}
