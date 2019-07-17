import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-workspace';
  html = '<div><h1>Html Content</h1></div>';

  constructor(private changeDetectorRef: ChangeDetectorRef){
  }

  changeHtml(){
    setTimeout(()=>{
      this.html = '<div><h1>Html Content2</h1></div>';
      this.changeDetectorRef.detectChanges();
    })
  }
}
