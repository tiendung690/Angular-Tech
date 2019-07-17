import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppContextService } from '../app-context.service';

@Component({
  selector: 'app-rxjs-memoryleak',
  templateUrl: './rxjs-memoryleak.component.html',
  styleUrls: ['./rxjs-memoryleak.component.css']
})
export class RxjsMemoryleakComponent implements OnInit, OnDestroy{

  constructor(private _appContextService: AppContextService) {
    this._appContextService.log('RxjsMemoryleakComponent construct');
  }

  ngOnInit() {
    this._appContextService.log('RxjsMemoryleakComponent init');
    this._appContextService.getScheduler().subscribe((number: number)=>{
      this._appContextService.log('scheduling');
    })
  }

  ngOnDestroy(){
    this._appContextService.log('RxjsMemoryleakComponent destory');
  }
}
