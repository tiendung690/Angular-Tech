import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1TestComponent } from './module1-test/module1-test.component';
import { Module1Test1Component } from './module1-test1/module1-test1.component';
import { Module1Test2Component } from './module1-test2/module1-test2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Module1TestComponent, 
    Module1Test1Component, 
    Module1Test2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Module1Module { }
