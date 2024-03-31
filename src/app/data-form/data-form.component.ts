import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  dataForm!: FormGroup;
  detail: Details = new Details();
  private editedService: EditService;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    editService: EditService,
    private router: Router
  ) {
    this.editedService = editService;
  }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });

    if (history.state && history.state.studentdetails) {
      this.detail = history.state.studentdetails;

      this.dataForm.patchValue({
        id: this.detail.id,
        name: this.detail.name,
        phone: this.detail.phone,
      });
    }
  }

  submitForm() {
    console.log('Form submitted:', this.dataForm.value);
    if (!this.editedService.isEdit) {
      this.dataService.createData(this.dataForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/table']);
        },
        (error) => {
          console.error('Creating error:', error);
        }
      );
    } else {
      this.detail = { ...this.detail, ...this.dataForm.value };
      console.log('Update submitted:', this.detail);
      this.dataService.updateData(this.detail).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/table']);
        },
        (error) => {
          console.error('Update error:', error);
        }
      );
    }
  }

  public get editService(): EditService {
    return this.editedService;
  }
}

export class Details {
  id: number;
  name: string;
  phone: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.phone = '';
  }
}
