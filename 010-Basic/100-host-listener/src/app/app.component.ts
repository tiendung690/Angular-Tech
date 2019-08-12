import { LogService } from './log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  logs: Array<string> = [];

  constructor(private _logService: LogService){
  }

  ngOnInit(){
    this._logService.getLogObservables().subscribe((log) => {
      this.logs.push(log);
    });
  }

  clearLog(){
    this.logs = [];
  }
}
