import { Component, HostBinding } from '@angular/core';
import { ViewImageDialogComponent } from '../view-image-dialog/view-image-dialog.component';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wins',
  templateUrl: './wins.component.html',
  styleUrl: './wins.component.scss'
})
export class WinsComponent {
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.max-width') maxWidth = '1000px';

  constructor(
    private title: Title,
    private dialog: MatDialog
  ) {
    this.title.setTitle("Harry's Appraisals - Success stories");
  }

  openViewImageDialog(imageSource: string) {
    this.dialog.open(
      ViewImageDialogComponent, {
        maxWidth: '600px',
        data: {
          imgSrc: imageSource
        }
      }
    );
  }

}
