import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-fields',
  templateUrl: './product-fields.component.html',
  styleUrls: ['./product-fields.component.scss']
})
export class ProductFieldsComponent implements OnInit {
  formConfig: any[];
  filteredFormConfig!: any[];
  sortField!: string;
  sortOrder!: 'asc' | 'desc';
  apiUrl = 'http://localhost:3000/product-fields'; // Replace with your API endpoint
  filterTerm: string = "";

  constructor(private http: HttpClient) {
    this.formConfig = [];
    this.filteredFormConfig = [];
    this.sortField = '';
    this.sortOrder = 'asc';
  }

  ngOnInit(): void {
    this.getProductFields();
  }

  getProductFields(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        this.formConfig = response;
        this.filteredFormConfig = response;
      },
      (error) => {
        console.log('Error fetching product fields:', error);
      }
    );
  }


  filterFields(e: Event): void {
    const searchTerm = (e.target as HTMLTextAreaElement).value;
    this.filteredFormConfig = this.formConfig.filter((field) =>
      field.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  sortFields(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }

    this.filteredFormConfig.sort((a, b) => {
      const aValue = a[field].toLowerCase();
      const bValue = b[field].toLowerCase();

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  addField(): void {
    const newField = { name: '', label: '', type: '', required: false , editing: true};
    this.filteredFormConfig.push(newField);
  }

  editField (field: any): void {
    field.editing = true;
  }

  saveField(field: any): void {
    if (!field._id) {
      // Add new field
      this.http.post<any>(this.apiUrl, field).subscribe(
        (response) => {
          field._id = response._id;
          field.editing = false;
        },
        (error) => {
          console.log('Error adding product field:', error);
        }
      );
    } else {
      // Update existing field
      this.http.put<any>(`${this.apiUrl}/${field._id}`, field).subscribe(
        () => {
          field.editing = false;
        },
        (error) => {
          console.log('Error updating product field:', error);
        }
      );
    }
  }

  deleteField(field: any): void {
    if (field._id) {
      this.http.delete<any>(`${this.apiUrl}/${field._id}`).subscribe(
        () => {
          const index = this.filteredFormConfig.indexOf(field);
          if (index !== -1) {
            this.filteredFormConfig.splice(index, 1);
          }
        },
        (error) => {
          console.log('Error deleting product field:', error);
        }
      );
    } else {
      // Field hasn't been saved yet, just remove from the array
      const index = this.filteredFormConfig.indexOf(field);
      if (index !== -1) {
        this.filteredFormConfig.splice(index, 1);
      }
    }
  }

  clear () {
    this.filterTerm = "";
    this.filteredFormConfig = this.formConfig;
    this.sortField = '';
    this.sortOrder = 'asc';
  }

  cancel (field: any) {
    field.editing = false;
  }
}
