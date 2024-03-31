import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {
    path: 'form',
    component: DataFormComponent,
  },
  {
    path: 'table',
    component: DataTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
