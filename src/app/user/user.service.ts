// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './user';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private Http:HttpClient,) { }
//   public name!: string 
//   public details!: User

//   public getUser():Observable<User[]>{
//    return this.Http.get<User[]>('https://localhost:7132/api/User')
//   }
//   public save(u:User){
//     this.Http.post('api/user',u).subscribe(()=>{
//       console.log("this user save succsessfuly");
//       window.location.reload();
//     })
//   }
//   public getpromiseUser():Promise<any>{
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
//   public deleteUser(id:string){
//     return this.Http.delete(`https://localhost:7132/api/user/'${id}`)
//     .subscribe(()=>{
//       console.log('this user deleted succsessfuly')
//       window.location.reload();
//     },(error)=>{
//       console.error("error:deleted successfully",error);
//     })
//     }

//     public getUserById(id:string):Observable<User>{
//       return this.Http.get<User>(`https://localhost:7132/api/user/'${id}`);

//     }
//     public saveUserToSessionStorage() {
//       const detailsJsonString = JSON.stringify(this.details);
//       sessionStorage.setItem('userDetails', detailsJsonString);
//   }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7132/api';
  public userName!:string;


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/User`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/User/${id}`);
  }
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/User`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/User/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/User/${id}`);
  }
}
  
  

