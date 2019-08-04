import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  

  constructor() { }

  save(value: any) {
    console.log('Calling api to save data...!!')
    throw new Error("Method not implemented.");
  }
}
