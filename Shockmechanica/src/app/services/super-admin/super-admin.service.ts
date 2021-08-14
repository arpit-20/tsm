import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  private url = "http://localhost:7200/"
  constructor(private http: HttpClient) { }


  public deleteAdmin(id: any): Observable<any>{
    return this.http.delete(this.url+"user/register"+id);
  }



  public updateAdmin(id: any,body:any): Observable<any>{
    return this.http.patch(this.url+"user/"+id,body);
  }

  public getAdmin(id?: any): Observable<any>{
    if(id){
    return this.http.get(this.url+"user/"+id);
    }else{
    return this.http.get(this.url+"user/");
    }
  }


}
