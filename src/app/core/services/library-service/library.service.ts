import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LibraryModel from '../../models/library-model';
import { ErrorHandlerService } from '../error-handling-service/error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  isLibraryCreated:boolean = false;
  currentLibraryData:LibraryModel=null;
  constructor(private http: HttpClient,private errorHandlerService: ErrorHandlerService) {
    this.checkIfLibraryCreated();
   }

  async checkIfLibraryCreated(): Promise<void> {
    try{
    let response = await this.http.get<any>("http://localhost:3000/library", ).toPromise();
      if(response.status===200&&response.data.library_name&&response.data.library_name.length>0){
        this.isLibraryCreated=true;
        this.currentLibraryData={...response.data};
      }
    }catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
}
