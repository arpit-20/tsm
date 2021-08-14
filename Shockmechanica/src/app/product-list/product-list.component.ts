import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toPurchase(){
    this.router.navigateByUrl('/services/buy')
  }

}
