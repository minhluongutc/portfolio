import {Component, Injector, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgOptimizedImage} from '@angular/common';
import {BaseComponent} from "../base.component";
import {EXPERIENCE, PERSONAL_INFO, PROJECTS, SKILLS} from "../data/data.constant";
import {TranslatePipe} from "../pipe/translate.pipe";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    TranslatePipe,
    CommonModule, TranslatePipe, ProjectComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent extends BaseComponent implements OnInit {
  constructor(
    injector: Injector,) {
    super(injector);
  }

  protected readonly PERSONAL_INFO = PERSONAL_INFO;
  protected readonly EXPERIENCE = EXPERIENCE;
  protected readonly SKILLS = SKILLS;
  protected readonly PROJECTS = PROJECTS;
}
