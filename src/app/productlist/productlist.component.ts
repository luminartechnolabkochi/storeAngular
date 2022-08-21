import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => {
        this.products = data


      })



  }
  getProductDetail(id:number){

    this.router.navigate(['product-details/',id])
  }

}
