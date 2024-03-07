import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss'],
})
export class HeaderCategoryComponent {
  constructor(private router: Router) {}
  home() {
    this.router.navigate(['/home']);
  }
}
