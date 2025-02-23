import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Isotope from 'isotope-layout';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @ViewChild('gridContainer', { static: false }) gridContainer!: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  isotope!: Isotope;
  activeFilter = '*';

  filters = [
    { label: 'All Projects', value: '*' },
    { label: 'Solar Energy', value: '.seo' },
    { label: 'Wind Energy', value: '.marketing' },
    { label: 'Hydropower Plants', value: '.website' }
  ];

  projects = [
    { name: 'Solar Project 1', category: 'seo', url: '', image: 'assets/img/gallery/protfolio-img01.png' },
    { name: 'Wind Project 1', category: 'marketing', url: '', image: 'assets/img/gallery/protfolio-img02.png' },
    { name: 'Hydropower Project 1', category: 'website', url: '', image: 'assets/img/gallery/protfolio-img03.png' },
    { name: 'Solar Project 2', category: 'seo', url: '', image: 'assets/img/gallery/protfolio-img04.png' },
    { name: 'Wind Project 2', category: 'marketing', url: '', image: 'assets/img/gallery/protfolio-img05.png' },
  ];

  ngAfterViewInit() {
    setTimeout(() => {  // Ensure Isotope initializes after DOM rendering
      this.isotope = new Isotope(this.gridContainer.nativeElement, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'  // Ensures items are arranged in rows
      });
    }, 100);
  }

  applyFilter(filterValue: string) {
    this.activeFilter = filterValue;
    this.isotope.arrange({ filter: filterValue });
  }

}
