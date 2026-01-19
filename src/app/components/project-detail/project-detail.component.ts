import {Component, Injector, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {BaseComponent} from "../../base.component";
import {ActivatedRoute} from "@angular/router";
import {PROJECTS} from "../../data/data.constant";
import {TranslatePipe} from "../../pipe/translate.pipe";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    TranslatePipe,
    ProjectComponent,
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent extends BaseComponent implements OnInit {
  selectedID: string;
  selectedProject;
  projectOthers;

  constructor(
    injector: Injector,
    private route: ActivatedRoute) {
    super(injector);
    this.selectedID = this.route.snapshot.params['id'];
    this.selectedProject = PROJECTS.find((e) => e.projectUrl == `/${this.selectedID}`) || PROJECTS[0];

    this.projectOthers = PROJECTS.filter((e) => e.projectUrl != `/${this.selectedID}`);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // listen to route param changes
    this.route.params.subscribe(params => {
      this.selectedID = params['id'];
      this.selectedProject = PROJECTS.find((e) => e.projectUrl == `/${this.selectedID}`) || PROJECTS[0];
      this.projectOthers = PROJECTS.filter((e) => e.projectUrl != `/${this.selectedID}`);
      this.scrollToTop();
    });

    // Scroll to top when component is initialized
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling animation
    });
  }

}
