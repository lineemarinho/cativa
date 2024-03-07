import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame-added-successfully',
  templateUrl: './frame-added-successfully.component.html',
  styleUrls: ['./frame-added-successfully.component.scss'],
})
export class FrameAddedSuccessfullyComponent {
  constructor(private router: Router) {}
  send() {
    this.router.navigate(['/send-frame']);
  }
  home() {
    this.router.navigate(['/home']);
  }
}
