import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { OffcanvasComponent } from './layout/offcanvas/offcanvas.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRouter } from './app.routes';
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
import { SlickCarouselModule } from 'ngx-slick-carousel';
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

@NgModule({
imports: [BrowserModule,AppRouter,SlickCarouselModule],
  declarations: [	
      AppComponent,
      LayoutComponent,
      HeaderComponent,
      OffcanvasComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      SliderComponent,
      ServiceComponent,
      CounterComponent,
      PortfolioComponent,
      VideoComponent,
      TeamComponent,
      TestinomialComponent,
      CalltocontactComponent,
      BlogComponent,
      BrandComponent,
      AboutUsComponent,
      ProjectComponent,
      ProjectsDetailComponent,
      PricingComponent,
      FaqComponent,
      ShopComponent,
      ShopDetailComponent,
      ServicesComponent,
      ServicesDetailComponent,
      SearchComponent,
      ContactComponent
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
