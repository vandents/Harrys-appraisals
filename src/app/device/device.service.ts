import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  width: number;
  isMobile: boolean;

  constructor() {
    this.width = document.body.offsetWidth;
    this.isMobile = this.width < 675;
  }

}
