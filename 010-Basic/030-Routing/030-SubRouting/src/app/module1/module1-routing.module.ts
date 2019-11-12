import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Module1TestComponent } from './module1-test/module1-test.component';
import { Module1Test1Component } from './module1-test1/module1-test1.component';
import { Module1Test2Component } from './module1-test2/module1-test2.component';

const module1Routes: Routes  = [
    { 
        path: 'module1',  
        component: Module1TestComponent, 
        children: [
            {
                path: 'test1',
                component: Module1Test1Component
            },
            {
                path: 'test2',
                component: Module1Test2Component
            }
        ]
    }
];


@NgModule({
    imports: [
      RouterModule.forChild(module1Routes)
    ],
    exports: [
      RouterModule
    ]
  })
  
export class Module1RotuingModule{}