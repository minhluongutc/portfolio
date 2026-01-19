import {LanguageI} from "./interfaces/LanguageI.interface";
import {CAREER_PATH_LANG} from "./language/career-path.lang";
import {COMMON_LANG} from "./language/common.lang";
import {PERSONAL_INFO_LANG} from "./language/personal-info.lang";
import {PROJECT_LANG} from "./language/project.lang";


export const LANGUAGE: LanguageI[] = [
  ...CAREER_PATH_LANG,
  ...COMMON_LANG,
  ...PERSONAL_INFO_LANG,
  ...PROJECT_LANG,
  // {key: 'heroTitle', vi: 'Xây dựng hệ thống backend ổn định, bảo mật & mở rộng', en: ''},
  // {key: 'timeline', vi: 'Lộ trình sự nghiệp', en: ''},
  // {key: 'skills', vi: 'Công nghệ & Kỹ năng', en: ''},
  // PROJECTS
];
