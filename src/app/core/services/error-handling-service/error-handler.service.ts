import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiConfig from '../../configs/api-config'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private http: HttpClient) { }
  async handleError(err){
    await this.http.post<any>(`${apiConfig.apiUrl}/errors/add`,{error:err}).toPromise();
  }
}
