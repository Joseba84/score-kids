import { Injectable } from '@angular/core';
import { Kid } from "../models/kid";
import { HttpClient } from '@angular/common/http';
import { kids } from './../data/kids';

@Injectable({
  providedIn: 'root'
})
export class KidsService {
  private key: string = 'kids';
  kids: Kid[] = [];
  constructor() { }

  setInitialData() {
    const data = this.getData();

    if (data === null) {
      localStorage.setItem(this.key, JSON.stringify(kids));
    }
  }

  setData() {
    localStorage.setItem(this.key, JSON.stringify(this.kids));
  }

  getData(): Kid[] {
    const kids: any = localStorage.getItem(this.key);
    this.kids = JSON.parse(kids);
    return this.kids;
  }

  updateData(detail: Kid) {
    const kidIndex = this.kids.indexOf(detail);
    this.kids[kidIndex] = detail;
    this.setData();
  }
}
