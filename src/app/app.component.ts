import { Component, HostListener } from '@angular/core';
import { DeviceService } from './device/device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harrys-appraisals';

  constructor(
    public deviceService: DeviceService,
    public router: Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceService.width = document.body.offsetWidth;
    this.deviceService.isMobile = this.deviceService.width < 675;
    console.log(this.deviceService.width);
    console.log(this.deviceService.isMobile);
  }

  navigateHome() {
    this.router.navigateByUrl('/home');
  }

}
