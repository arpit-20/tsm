import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Flickity from "flickity";

@Component({
  selector: 'app-teamperson',
  templateUrl: './teamperson.component.html',
  styleUrls: ['./teamperson.component.css']
})
export class TeampersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // external js: flickity.pkgd.js

// var $carousel = $('.carousel').flickity();
// $('.button--resize').on( 'click', function() {
 
//   $carousel.toggleClass('is-expanded')
//     .flickity('resize');
// });

  }

}
