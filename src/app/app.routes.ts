import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffcanvasComponent } from './layout/offcanvas/offcanvas.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { SliderComponent } from './layout/slider/slider.component';
import { ServiceComponent } from './layout/service/service.component';
import { CounterComponent } from './layout/counter/counter.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';
import { VideoComponent } from './layout/video/video.component';
import { TeamComponent } from './layout/team/team.component';
import { TestinomialComponent } from './layout/testinomial/testinomial.component';
import { CalltocontactComponent } from './layout/calltocontact/calltocontact.component';
import { BlogComponent } from './layout/blog/blog.component';
import { BrandComponent } from './layout/brand/brand.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
    {
        path: 'offcanvas',
        component: OffcanvasComponent
     },
    {
        path: 'about',
        component: AboutComponent
      },
    {
        path: 'slider',
        component: SliderComponent
      },
    {
        path: 'service',
        component: ServiceComponent
      },
    {
      path: 'counter',
      component: CounterComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
      },
    {
        path: 'video',
        component: VideoComponent
      },
    {
        path: 'team',
        component: TeamComponent
      },
    {
        path: 'testinomial',
        component: TestinomialComponent
      },
    {
        path: 'calltocontact',
        component: CalltocontactComponent
     },
    {
        path: 'blog',
        component: BlogComponent
     },
     {
        path: 'brand',
        component: BrandComponent
     },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
];

@NgModule({
    imports:  [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter {}
