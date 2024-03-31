import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { EditService } from './service/edit.service';

@NgModule({
  declarations: [AppComponent, DataFormComponent, DataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [DataService, EditService],
  bootstrap: [AppComponent],
})
export class AppModule {}
