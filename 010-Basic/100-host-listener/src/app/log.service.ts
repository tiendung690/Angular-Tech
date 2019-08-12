import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _logSubject = new Subject<string>()

  constructor() { }

  public getLogObservables(): Observable<string> {
    return this._logSubject.asObservable();
  }

  public log(str: string): void{
    this._logSubject.next(str);
  }
}
