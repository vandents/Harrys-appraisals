import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeviceService } from '../device/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.max-width') maxWidth = '872px';

  constructor(
    private router: Router,
    private title: Title,
    public deviceService: DeviceService
  ) {
    this.title.setTitle("Harry's Appraisals - Home");
  }

  onContactClick() {
    this.router.navigateByUrl('contact');
    window.scrollTo(0, 0);
  }
}
