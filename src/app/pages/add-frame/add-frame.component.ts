import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-frame',
  templateUrl: './add-frame.component.html',
  styleUrls: ['./add-frame.component.scss'],
})
export class AddFrameComponent {
  create = true;
  step1 = false;
  step2 = false;
  step3 = false;
  constructor(private router: Router) {}
  goStep1() {
    this.create = false;
    this.step2 = false;
    this.step3 = false;
    this.step1 = true;
  }
  goStep2() {
    this.step1 = false;
    this.step3 = false;
    this.step2 = true;
  }
  goStep3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
  }
  goCreate() {
    this.step3 = false;
    this.router.navigate([`/active-frame`]);
  }
}
