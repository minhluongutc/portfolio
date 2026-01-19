import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {ProjectDetailComponent} from "./components/project-detail/project-detail.component";

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
