import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../model';




@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  // prdoductDetails!: Model;
  productDetails: any;
  constructor(private route: ActivatedRoute) {

    console.log("hererrerererererere");

  }

  ngOnInit(): void {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
      console.log(id);

    })
    // fetch('https://fakestoreapi.com/products/')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);


    // })
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => this.productDetails=data)
      
      


  }

}
