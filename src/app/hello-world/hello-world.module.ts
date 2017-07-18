import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HelloWorldComponent } from './hello-world.component';

const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HelloWorldComponent
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule {
}
