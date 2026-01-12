import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

export const routes: Routes = [
  // {
    // path: '',
    // component: AppComponent,
    // children: [
      {
        path: '',
        component: PortfolioComponent
      },

      {
        path: ':id',
        component: ProjectDetailComponent
      }
    // ]
  // },
];
