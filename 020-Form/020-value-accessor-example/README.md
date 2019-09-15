# Value Accessor


**custom-input.component.ts**
```
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{       
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true     
  }]  
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  
  onChange: (value: any) => void;
  value: any;

  constructor() { }

  ngOnInit() {
  }
  
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  callOnChangeTesting(){
    this.onChange('Testing');
  }
}

```

**custom-input.component.html**
```
{{value}}
<button (click)="callOnChangeTesting()">callOnChangeTesting</button>
```

**app.component.ts**
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:any = 'Initial Value';
}

```

**app.component.html**
```
<app-custom-input [(ngModel)]="value"></app-custom-input>

{{value}}
```
