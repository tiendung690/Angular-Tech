import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppContextService } from '../app-context.service';

@Component({
  selector: 'app-rxjs-memoryleak-fix-takeutil',
  templateUrl: './rxjs-memoryleak-fix-takeutil.component.html',
  styleUrls: ['./rxjs-memoryleak-fix-takeutil.component.css']
})
export class RxjsMemoryleakFixTakeutilComponent implements OnInit {

  destory$ : Subject<boolean> = new Subject<boolean>();

  constructor(private _appContextService: AppContextService) {
    this._appContextService.log('RxjsMemoryleakFixComponent construct');
  }

  ngOnInit() {
    this._appContextService.log('RxjsMemoryleakFixComponent init');
    this._appContextService.getScheduler()
      .pipe(
        takeUntil(this.destory$)
      )
      .subscribe((number: number)=>{
        this._appContextService.log('scheduling');
      });
  }

  ngOnDestroy(){
    this.destory$.next(true);
    this._appContextService.log('RxjsMemoryleakFixComponent destory');
  }

}
