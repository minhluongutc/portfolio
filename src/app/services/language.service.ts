import { Injectable } from '@angular/core';
import {LANG_KEY, Lang} from "../data/data.constant";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly defaultLang: Lang = 'vi';

  private langSubject = new BehaviorSubject<Lang>(this.getLangFromStorage());
  lang$ = this.langSubject.asObservable();

  constructor() {}

  /** Lấy ngôn ngữ hiện tại */
  get currentLang(): Lang {
    return this.langSubject.value;
  }

  /** Set ngôn ngữ + lưu localStorage */
  setLanguage(lang: Lang): void {
    localStorage.setItem(LANG_KEY, lang);
    this.langSubject.next(lang);
  }

  /** Load từ localStorage (private) */
  private getLangFromStorage(): Lang {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === 'vi' || saved === 'en'
      ? saved
      : this.defaultLang;
  }
}
