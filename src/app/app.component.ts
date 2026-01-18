import {Component, Injector} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {TranslatePipe} from "./pipe/translate.pipe";
import {BaseComponent} from "./base.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    TranslatePipe,
    NgClass,
    RouterLink
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  isMenuOpen = false; // Trạng thái đóng mở menu trên mobile

  constructor(injector: Injector, private router: Router) {
    super(injector);
    this.toggleDarkMode();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  homeAndScrollToElementById(id: string): void {
    this.router.navigate(['/']).then(() => {
      this.scrollToElementById(id);
    });
  }

  scrollToElementById(id: string): void {

    // Get the element by its ID
    const element = document.getElementById(id);

    if (element) {
      // Scroll the element into the visible area of the browser window
      element.scrollIntoView({
        behavior: 'smooth', // Optional: smooth animation
        block: 'start'      // Optional: align the top of the element to the top of the viewport
      });
    }
  }
}
