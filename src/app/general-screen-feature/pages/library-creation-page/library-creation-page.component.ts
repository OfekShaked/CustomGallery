import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { LibraryService } from 'src/app/core/services/library-service/library.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';



@Component({
  selector: 'app-library-creation-page',
  templateUrl: './library-creation-page.component.html',
  styleUrls: ['./library-creation-page.component.css']
})
export class LibraryCreationPageComponent implements OnInit {

  libraryForm: FormGroup;
  libraryActionString: string = "Create Library";

  constructor(private formBuilder: FormBuilder, private errorHandlerService: ErrorHandlerService, private libraryService: LibraryService, private http: HttpClient, private router: Router, public nightModeService: NightModeService) { }

  ngOnInit(): void {
    this.libraryForm = this.formBuilder.group({
      library_name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      default_template: new FormControl(''),
    });
    this.setLibraryDataIfExist();
  }

  async setLibraryDataIfExist() {
    try {
      await this.libraryService.checkIfLibraryCreated();
      if (this.libraryService.isLibraryCreated) {
        this.libraryActionString = "Update Library";
        this.libraryForm.patchValue({
          library_name: this.libraryService.currentLibraryData.library_name,
          description: this.libraryService.currentLibraryData.description,
          default_template: this.libraryService.currentLibraryData.default_template
        });
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  onSubmit(): void {
    try{
    this.http.post<any>("http://localhost:3000/library/add", this.libraryForm.value).subscribe(
      (response) => {
        if (response.status == 200) {
          this.libraryService.currentLibraryData = this.libraryForm.value;
          this.libraryService.isLibraryCreated = true;
          this.router.navigateByUrl('/addimage');
        }
      },
      (error) => {
        this.errorHandlerService.handleError(error)
      }
    )
    }catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

}
