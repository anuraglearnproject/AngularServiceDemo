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
}
