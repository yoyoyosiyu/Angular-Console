import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityCenterComponent } from './security-center/security-center.component';
import { SecurityCenterHomeComponent } from './security-center-home/security-center-home.component';

const securityCenterRoutes: Routes = [
  {
    path: 'security',
    component: SecurityCenterComponent,
    children: [
      {
        path: '',
        component: SecurityCenterHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(securityCenterRoutes)
  ],
  declarations: [
    SecurityCenterComponent,
    SecurityCenterHomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityCenterRoutingModule { }
