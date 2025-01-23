import { Component, OnInit } from '@angular/core';
import { LoadproductsService } from '../../services/loadproducts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demoservice',
  imports: [CommonModule, FormsModule],
  templateUrl: './demoservice.component.html',
  styleUrl: './demoservice.component.css'
})
export class DemoserviceComponent implements OnInit {

  searchParam = {
    query: 'all',
    pageSize: 100
  }
  callProductServe: LoadproductsService;
  constructor(private prodServe: LoadproductsService) {
    this.callProductServe = prodServe;
  }

  callLoadProducts(){
    this.callProductServe.loadProducts(this.searchParam.query, this.searchParam.pageSize);
  }

  ngOnInit(): void {
    this.callLoadProducts();
  }
}
