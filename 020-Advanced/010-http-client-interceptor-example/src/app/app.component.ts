import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private httpClient: HttpClient){
  }
  
  onClick(){
    var request = this.httpClient.get("assets/data.json");
    request.subscribe(function(data){
      alert(JSON.stringify(data));
    })
  }
}
