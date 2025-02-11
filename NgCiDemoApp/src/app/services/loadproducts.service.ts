import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NasaImage } from '../models/NasaImage';
import { NasaData } from '../models/NasaData';

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
      q: this.returnNullWhenEmptyOrUndefined(query),
      page_size: (pageSize ?? 1).toString()
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
    // end method
  }

  getImages(data: any): NasaImage[] {
    return data as NasaImage[];
  }

  getData(data: any): NasaData[] {
    return data as NasaData[];
  }

  returnNullWhenEmptyOrUndefined(value: any): any {
    if (value === '' || value === undefined)
      return null;
    return value;
  }
}
