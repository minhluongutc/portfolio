import {Component, Injector, OnInit} from "@angular/core";
import {LANG_KEY} from "./data/data.constant";
import AOS from "aos";

@Component({
  template: `
    <ng-content></ng-content>`,
  imports: [],
  standalone: true
})
export class BaseComponent implements OnInit {
  lang: 'vi' | 'en';

  isDarkMode = true;
  DARK_MODE_KEY: string = "isDarkMode";

  constructor(private readonly injector: Injector) {
    console.log('constructor')
    // Initialize language
    if (!localStorage.getItem(LANG_KEY)) {
      localStorage.setItem(LANG_KEY, JSON.stringify('vi'));
    }
    this.lang = JSON.parse(<string>localStorage.getItem(LANG_KEY));

    // Initialize dark mode
    if (!localStorage.getItem(this.DARK_MODE_KEY)) {
      localStorage.setItem(this.DARK_MODE_KEY, JSON.stringify(false));
    }
    this.isDarkMode = JSON.parse(localStorage.getItem(this.DARK_MODE_KEY) || 'false');
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }

  toggleLang() {
    this.lang = this.lang === 'vi' ? 'en' : 'vi';
    localStorage.setItem(LANG_KEY, JSON.stringify(this.lang));

    // reload page to apply language change
    window.location.reload();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.DARK_MODE_KEY, JSON.stringify(this.isDarkMode));
  }


}
