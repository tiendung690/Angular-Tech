import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  name: String;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges){
    console.log("ngOnChange");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
}
