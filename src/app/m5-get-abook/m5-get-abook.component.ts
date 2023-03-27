import { BookAPIService } from '../services/book-api.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-m5-get-abook',
  templateUrl: './m5-get-abook.component.html',
  styleUrls: ['./m5-get-abook.component.css'],
})
export class M5GetAbookComponent {
  book: any;

  public minprice:any;
  public maxprice:any;

  errMessage: string = '';

  constructor(private _service: BookAPIService) {

  }
  searchBook(bookID: string) {
    this._service.getBook(bookID).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  filterBook(minprice:any , maxprice: any) {
    this._service.sortBook(minprice, maxprice).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

}
