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
import { AboutUsComponent } from './layout/aboutUs/aboutUs.component';
import { ProjectComponent } from './layout/projects/project.component';
import { ProjectsDetailComponent } from './layout/projectsDetail/projectsDetail.component';
import { PricingComponent } from './layout/pricing/pricing.component';
import { FaqComponent } from './layout/faq/faq.component';
import { ShopComponent } from './layout/shop/shop.component';
import { ShopDetailComponent } from './layout/shopDetail/shopDetail.component';
import { ServicesComponent } from './layout/services/services.component';
import { ServicesDetailComponent } from './layout/servicesDetail/servicesDetail.component';
import { SearchComponent } from './layout/search/search.component';
import { ContactComponent } from './layout/contact/contact.component';

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
      path: 'contact',
      component: ContactComponent
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
        path: 'aboutUs',
        component: AboutUsComponent
     },
    {
        path: 'projects',
        component: ProjectComponent
     },    
    {
        path: 'projectsDetail',
        component: ProjectsDetailComponent
     },  
    {
        path: 'pricing',
        component: PricingComponent
     },  
    {
        path: 'faq',
        component: FaqComponent
     }, 
    {
        path: 'shop',
        component: ShopComponent
     }, 
    {
        path: 'shopDetail',
        component: ShopDetailComponent
     }, 
    {
        path: 'services',
        component: ServicesComponent
     }, 
    {
        path: 'servicesDetail',
        component: ServicesDetailComponent
     },
    {
      path: 'search',
      component: SearchComponent
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
