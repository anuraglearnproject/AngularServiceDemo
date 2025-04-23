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

  formatDate(isoDate:string, requireFullDate = false) {
    const dateObj = new Date(isoDate);  
    const formattedDate = dateObj.toLocaleDateString('en-US', 
      { month: 'short', day: 'numeric', year: 'numeric' });
  
    if (requireFullDate) {
      const time = dateObj.toLocaleTimeString('en-US',
         { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      return `${formattedDate}, ${time}`;
    }
  
    return formattedDate;
  }
}
