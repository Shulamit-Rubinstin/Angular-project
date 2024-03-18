// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CourseComponent } from './course';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {
//   constructor(private Http:HttpClient) { }
//   public getCours():Observable<CourseComponent[]>{
//    return this.Http.get<CourseComponent[]>('api/user')
//   }https://localhost:7132/api/
//   public save(u:CourseComponent){
//     this.Http.post('api/user',u).subscribe(()=>{
//       console.log("this user save succsessfuly");
//       window.location.reload();
//     })
//   }
//   public getpromiseCourse():Promise<any>{
//     var x=true;
//     return new Promise((resolve,reject)=>(  
//       setTimeout(()=>{
//         if(x){
//         resolve ('ok');
//         }
//         reject('error')
//       },3000)
//     ))
//   }
//   public deleteCourse(id:string){
//     return this.Http.delete(`https://localhost:7132/api/user/'${id}`)
//     .subscribe(()=>{
//       console.log('this user deleted succsessfuly')
//       window.location.reload();
//     },(error)=>{
//       console.error("error:deleted successfully",error);
//     })
//     }

//     public getCourseById(id:string):Observable<CourseComponent>{
//       return this.Http.get<CourseComponent>(`https://localhost:7132/api/user/'${id}`);
//     }
//   }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCours() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'https://localhost:7132/api';



  constructor(private http: HttpClient) { }

  courseToEdit!:Course
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/Course`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/Course/${id}`);
  }
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/Course`,course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/Course/${id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.baseUrl}/Course/${id}`);
    
  }
}