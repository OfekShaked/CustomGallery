import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormGroupName, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-library-creation-page',
  templateUrl: './library-creation-page.component.html',
  styleUrls: ['./library-creation-page.component.css']
})
export class LibraryCreationPageComponent implements OnInit {

  libraryForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.libraryForm=this.formBuilder.group({
      library_name:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      default_template:new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.libraryForm.value);
    
    this.http.post<any>("http://localhost:3000/library/add",this.libraryForm.value).subscribe(
      (response)=>{
        if(response.status===200){
          this.router.navigate(['/addimage']);
        }
        (error)=>{console.log(error);
        }
      }
    )
  }

}
