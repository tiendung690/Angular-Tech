import { LogService } from './log.service';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestInput]'
})
export class TestInputDirective {

  constructor(private _logService: LogService) {}
  
  @HostListener('keydown', ['$event'])
  onKeypress(event: KeyboardEvent){
    this._logService.log(event.key);
  }

}
