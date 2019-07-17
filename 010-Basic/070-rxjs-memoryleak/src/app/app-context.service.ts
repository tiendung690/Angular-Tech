import { Injectable } from '@angular/core';
import { Subject, Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  logSubject: Subject<string> = new Subject<string>();

  constructor() {
  }

  getLogObservable(): Observable<string>{
    return this.logSubject.asObservable();
  }

  log(str: string){
    this.logSubject.next(str);
  }

  getScheduler(): Observable<number>{
    return interval(1000);
  }

}
