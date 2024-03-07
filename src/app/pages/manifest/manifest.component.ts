import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
})
export class ManifestComponent {
  constructor(private router: Router) {}
  go() {
    this.router.navigate(['/collections']);
  }
}
