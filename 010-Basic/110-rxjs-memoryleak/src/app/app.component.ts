import { AppContextService } from './app-context.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logs: string[] = [];

  constructor(private _appContextService: AppContextService){
  }

  ngOnInit(){
    this._appContextService.getLogObservable().subscribe((log)=>{
      this.logs.push(log);
    });
  }
  
}
