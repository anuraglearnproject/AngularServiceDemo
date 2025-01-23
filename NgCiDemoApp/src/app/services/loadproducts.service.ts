import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadproductsService {

  loading: string = '';
  resultData: any;
  
  private httpServe: HttpClient;
  constructor(http: HttpClient) {
    this.httpServe = http;
  }

  loadProducts(query: string, pageSize: number = 100): void {
    this.resultData = {};
    this.loading = 'loading...';
    let searchParams = {
      q: query,
      page_size: pageSize.toString()
    };
    let searchString = new URLSearchParams(searchParams).toString()
    let url = "https://images-api.nasa.gov/search?" + searchString;
    this.httpServe.get(url).subscribe({
      next: result => {
        this.loading = 'loaded';
        this.resultData = result;
      },
      error: error => {
        this.loading = JSON.stringify(error);
      }
    });
  }

}
