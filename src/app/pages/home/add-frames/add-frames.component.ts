import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-frames',
  templateUrl: './add-frames.component.html',
  styleUrls: ['./add-frames.component.scss'],
})
export class AddFramesComponent {
  menu = false;
  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/home']);
  }
  add() {
    this.router.navigate(['/sucess-frame']);
  }
  openMenu() {
    this.menu = !this.menu;
  }
  navigate(id: string) {
    this.router.navigate([`/${id}`]);
  }
}
