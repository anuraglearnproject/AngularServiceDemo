import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  toModel<T>(data: any): T {
    try {
      return data as T;
    }
    catch (error) {
      console.log('unable to change type.');
      console.log(JSON.stringify(error));
    }
    return data;
  }

  getTrimed(data: string, getTill: number): string {
    if (data) {
      data = data.toString();
      data = data.length >= getTill ? data.substring(0, getTill) + "..." : data;
    }
    return data;
  }
}
