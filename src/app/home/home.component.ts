import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = [1, 2, 3, 4, 5];
  isSelectedCart: any = [];
  temp: any = [];
  localData: any = [];

  productdata = [
    {
      id: 1,
      name: 'cartone',
      price: '1000',
      img: '../../assets/shopping-cart.png',
      quntity: 5,
      isAddToCart: true,
      selectedQuantity: 0,
    },
    {
      id: 2,
      name: 'carttwo',
      price: '2000',
      img: '../../assets/shopping-cart.png',
      quntity: 10,
      isAddToCart: true,
      selectedQuantity: 0,
    },
    {
      id: 3,
      name: 'cartthree',
      price: '5000',
      img: '../../assets/shopping-cart.png',
      quntity: 3,
      isAddToCart: true,
      selectedQuantity: 0,
    },
    {
      id: 4,
      name: 'cartfour',
      price: '6000',
      img: '../../assets/shopping-cart.png',
      quntity: 4,
      isAddToCart: true,
      selectedQuantity: 0,
    },
    {
      id: 5,
      name: 'cartfive',
      price: '7000',
      img: '../../assets/shopping-cart.png',
      quntity: 8,
      isAddToCart: true,
      selectedQuantity: 0,
    },
  ];

  constructor(public common: CommonService) {}

  ngOnInit(): void {
    let data: any = localStorage.getItem('SelectedCart');
    if (data !== null) {
      this.localData = JSON.parse(data);
    }

    this.common.cartSelect.subscribe((data) => {
      if (data) {
        this.localData = JSON.parse(data);
        this.populateData();
        console.log('subscibe', this.localData);
      }
    });

    this.populateData();
  }
  populateData() {
    console.log('array is', this.localData);
    this.productdata.forEach((masterData) => {
      masterData.selectedQuantity=0;
      masterData.isAddToCart=true;
       });

       this.isSelectedCart=[]
   
    if (this.localData.length > 0) {
      this.productdata.forEach((masterData) => {
        this.localData.filter((local: any) => {
          if (masterData.id === local.id) {
            console.log("id matched")
            masterData.selectedQuantity = local.selectedQuantity;
            masterData.isAddToCart = local.isAddToCart;
          }
        });
      });
      this.isSelectedCart = this.localData.slice();
    }
  }

  onAddToCart(id: any) {
    console.log('click');
    this.productdata.filter((x) => {
      if (x.id === id) {
        x.isAddToCart = false;
        x.selectedQuantity = 1;
        this.isSelectedCart.push(x);
      }
    });
    this.common.setSelectCart(this.isSelectedCart);
    // console.log("object",this.productdata);
  }
  onInputQuantity(productData: any, event: any) {
    console.log('---', event);
    console.log('product data', productData);
    if (event.value !== 0) {
      productData.selectedQuantity = event.value;
    } else {
      productData.selectedQuantity = 0;
      productData.isAddToCart = true;
    }
    console.log('product data', this.productdata);
    this.isSelectedCart = [];
    this.productdata.filter((x: any) => {
      if (x.isAddToCart == false && x.selectedQuantity !== 0) {
        this.isSelectedCart.push(x);
      }
    });

    this.common.setSelectCart(this.isSelectedCart);
  }
  removeData(id: any) {
    let filteredArray = this.localData.filter((item: any) => item.id !== id);
    console.log('filteredArray', filteredArray);
    return filteredArray;
  }
}
