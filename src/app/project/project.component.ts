import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TranslatePipe} from "../pipe/translate.pipe";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TranslatePipe,
    NgClass,
    RouterLink
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnChanges {
  @Input() projects: any;
  @Input() title: string = 'project_header';

  ngOnInit(): void {
    console.log('ProjectComponent initialized with project:', this.projects);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project']) {
      console.log('Project input changed:', changes['projects'].currentValue);
      this.projects = changes['project'].currentValue;
    }
  }

}
