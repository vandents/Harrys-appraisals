import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  zip: null | number = null;
  vehicleZip: null | number = null;
  vehicle = '';
  details = '';
  vin = '';

  captchaResolved = false;

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.max-width') maxWidth = '1000px';


  constructor(private title: Title) {
    this.title.setTitle("Harry's Appraisals - Contact us");
  }


  checkCaptcha(captchaResponse: string | null) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }

  requiredFieldsPopulated(): boolean {
    return true;
  }

  submit() {
    const templateParams = {
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phone,
      email: this.email,
      zip: this.zip,
      vehicleZip: this.vehicleZip,
      vehicle: this.vehicle,
      details: this.details,
      vin: this.vin
    };
    console.log('templateParams)', templateParams)

    emailjs.send('service_4k53gzk', 'template_mus9uuk', templateParams, 'N5zOGVMpagDbUBzCb')
      .then(function(response: EmailJSResponseStatus) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

}
