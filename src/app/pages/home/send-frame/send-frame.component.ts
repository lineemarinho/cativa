import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-frame',
  templateUrl: './send-frame.component.html',
  styleUrls: ['./send-frame.component.scss'],
})
export class SendFrameComponent {
  sucess = false;
  constructor(private router: Router) {}
  send() {
    this.sucess = !this.sucess;
  }
  home() {
    this.router.navigate(['/home']);
  }
}
