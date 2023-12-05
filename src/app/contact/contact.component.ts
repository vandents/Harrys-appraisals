import { Component } from '@angular/core';
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


  constructor() {

  }

  submit() {
    // console.log('firstName', this.firstName);
    // console.log('lastName', this.lastName);
    // console.log('phone', this.phone);
    // console.log('email', this.email);
    // console.log('zip', this.zip);
    // console.log('vehicleZip', this.vehicleZip);
    // console.log('vehicle', this.vehicle);
    // console.log('details', this.details);

    const templateParams = {
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phone,
      email: this.email,
      zip: this.zip,
      vehicleZip: this.vehicleZip,
      vehicle: this.vehicle,
      details: this.details
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
