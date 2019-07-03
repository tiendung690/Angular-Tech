import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject, Observable, AsyncSubject } from 'rxjs';

interface Value {
  id: number;
  date1: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  value: {
    date1: Date
  } = {
    date1: new Date()
  };

  aSubject: Subject<string> 
  a$: Observable<string>;

  constructor(private _httpClient: HttpClient){
    this.aSubject = new Subject<string>();
  }

  ngOnInit(){
    this.aSubject.asObservable()
      .pipe(
        tap(value=> {
          console.log('abc');
          console.log(value);
        })
      ).pipe(
        tap(value=> {
          console.log('abc');
          console.log(value);
        })
      ).subscribe()
  }

  httpCall(){
    // this._httpClient.post("", this.value).subscribe();
    this.aSubject.next('abc');
  }

  httpGet(){
    this._httpClient.post<Value>("/api/posts", this.value)
      .pipe(
        tap(value=>{
          console.log('value')
          console.log(value)
        })
      ).subscribe((val: Value) => {
        console.log(val.date1);
      });
  }

  
}
