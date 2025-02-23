import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testinomial',
  templateUrl: './testinomial.component.html',
  styleUrls: ['./testinomial.component.css']
})
export class TestinomialComponent implements OnInit {
  testimonials = [
    { text: 'Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus. Praesent cursus diam risus, non accumsan neque fermentum eget. Maecenas vel aliquam enim aliquam aliquet finibus nisl.', name: 'Margie R. Robinson', role: 'Web Developer', image: 'assets/img/testimonial/testi_avatar.png' },
    { text: 'Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus. Praesent cursus diam risus, non accumsan neque fermentum eget. Maecenas vel aliquam enim aliquam aliquet finibus nisl.', name: 'John Doe', role: 'Project Manager', image: 'assets/img/testimonial/testi_avatar.png' },
    { text: 'Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus. Praesent cursus diam risus, non accumsan neque fermentum eget. Maecenas vel aliquam enim aliquam aliquet finibus nisl.', name: 'Emily Smith', role: 'Graphic Designer', image: 'assets/img/testimonial/testi_avatar.png' }
  ];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
