import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatandaddComponent } from './creatandadd/creatandadd.component';
import { EditComponent } from './Edit/Edit.component';
import { UpdateComponent } from './Update/Update.component';

const routes: Routes = [
  {
    path: 'CreatAndAdd',
    component: CreatandaddComponent,
    children: [
      {
        path: 'Edit',
        component: EditComponent
      }
    ]
  },
  {
    path: 'Update',
    component: UpdateComponent
  },
  {
    path: "",
    redirectTo: '/CreatAndAdd',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
