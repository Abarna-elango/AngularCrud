import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Details } from '../data-form/data-form.component';
import { EditService } from '../service/edit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  detailsData: Details[] = [];

  constructor(
    private dataService: DataService,
    private editService: EditService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getAllData().subscribe((res) => {
      console.log(res);
      this.detailsData = res;
    });
  }

  fetchDataById(item: Details): void {
    console.log('Editing details :', item);
    this.editService.isEdit = true;
    this.router.navigate(['/form'], { state: { studentdetails: item } });
    this.dataService.getByid(item.id).subscribe((res) => {
      this.detailsData = [item];
      console.log(res);
    });
  }

  DeleteDetails(item: Details): void {
    const confirm = window.confirm('Do you want to delete this details');
    if (confirm) {
      this.dataService.deleteData(item.id).subscribe((res) => {
        this.fetchData();
        console.log(res);
      });
    }
  }
}
