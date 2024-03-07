import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent {
  constructor(private router: Router) {}
  go() {
    this.router.navigate(['/manifest']);
  }
  homeCollections() {
    this.router.navigate(['/home-collections']);
  }
}
