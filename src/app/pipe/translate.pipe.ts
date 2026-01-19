import {Pipe, PipeTransform} from "@angular/core";
import {LANG_KEY} from "../data/data.constant";
import {LANGUAGE} from "../data/language.constant";
import {LanguageService} from "../services/language.service";

@Pipe({
  name: 'translate',
  standalone: true,  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {
  }

  transform(key: string, ...args: any[]) {
    return this.getLanguage(key) || key;
  }

  getLanguage(key: string) {
    return this.getLangValue(key, this.languageService.currentLang);
  }

  getLangValue(
    key: string,
    lang: 'vi' | 'en'
  ): string {
    const item = LANGUAGE.find(i => i.key === key);
    return item ? item[lang] : key;
  }
}

