import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';

@Component({
  selector: 'app-add-categories-page',
  templateUrl: './add-categories-page.component.html',
  styleUrls: ['./add-categories-page.component.css']
})
export class AddCategoriesPageComponent implements OnInit {
  rows: Array<Object> = [];
  categoryName: string = "";
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getAllCategorie();
  }
  async getAllCategorie() {
    try {
      const response = await this.http.get<any>("http://localhost:3000/categories").toPromise();
      if (response.status === 200) {
        this.rows = response.categories.map((cat) => { return { category: cat } });
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  async addCategory() {
    try {
      if (this.categoryName !== "" && !this.categoryName.includes(',')) {
        const res = await this.http.get<any>(`http://localhost:3000/category/add/${this.categoryName}`).toPromise();
        if (res.status === 200) this.rows = [...this.rows, { Category: this.categoryName }];
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
}
