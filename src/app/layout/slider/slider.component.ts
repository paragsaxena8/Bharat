import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,  // Enables fade transition
    cssEase: 'linear',
    arrows: false,  // Hide arrows if not needed
  };

  slides = [
    {
      image: 'assets/img/slider/slider_img02.jpg',
      title: 'WELCOME',
      subtitle: 'We Are The Best Solar Energy Source',
      description: 'Vivamus mattis ipsum vitae imperdiet eleifend...'
    },
    {
      image: 'assets/img/slider/slider_img01.jpg',
      title: 'WELCOME',
      subtitle: 'We Are The Best Solar Energy Source',
      description: 'Vivamus mattis ipsum vitae imperdiet eleifend...'
    }
  ];

  ngAfterViewInit() {
    this.applyAnimations(0); // Apply animations to the first slide initially
  }

  afterChange(event: any) {
    this.applyAnimations(event.currentSlide);
  }

  applyAnimations(activeIndex: number) {
    setTimeout(() => {
      const slides = document.querySelectorAll('.single-slider');
      slides.forEach((slide, index) => {
        slide.classList.remove('animate');
        if (index === activeIndex) {
          slide.classList.add('animate');
        }
      });
    }, 100); // Small delay for better effect
  }
  
  constructor() { }

  ngOnInit() {
  }

}
