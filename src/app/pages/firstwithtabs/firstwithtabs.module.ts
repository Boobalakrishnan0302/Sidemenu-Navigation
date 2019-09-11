import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstwithtabsPage } from './firstwithtabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: FirstwithtabsPage,
    children:[
      {
        path:'tab1',
        loadChildren:'../tab1/tab1.module#Tab1PageModule'
      },
      {
        path:'tab2',
        loadChildren:'../tab2/tab2.module#Tab2PageModule'
      },
      {
        path:'tab1/details',
        loadChildren: '../detail/detail.module#DetailPageModule'
      },{
        
          path:'tab2/details',
          loadChildren: '../detail/detail.module#DetailPageModule'
        
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstwithtabsPage]
})
export class FirstwithtabsPageModule {}
