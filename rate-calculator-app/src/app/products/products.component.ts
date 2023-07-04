import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  
}
