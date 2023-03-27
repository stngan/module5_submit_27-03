import { Component } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-m5-get-listbook',
  templateUrl: './m5-get-listbook.component.html',
  styleUrls: ['./m5-get-listbook.component.css']
})
export class M5GETListbookComponent {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
