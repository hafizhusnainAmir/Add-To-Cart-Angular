import { Component, OnInit, Input ,EventEmitter,Output } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() showCart : any;
  @Output() dataEvent = new EventEmitter<string>();
  length : any;
  getData :any = []
  totalIndividualPrice:any;
  isSelectedCart: any = [];

  constructor( public common: CommonService) { }

  ngOnInit(): void {
     this.getData = localStorage.getItem('SelectedCart');
     this.getData = JSON.parse(this.getData);



    console.log("get data",this.getData);
    this.common.cartSelect.subscribe(data =>{
      if(data){
        this.getData = JSON.parse(data);
        this.totalIndividualPrice = this.getData.price * this.getData.quntity;
        console.log("getDatta",this.getData);
       
      }
  })
    // this.common.cartSelect.subscribe(data => {
    // })
    // console.log("the cart data is");
  }
  onCloseCart(){
    console.log("onhide called")
    this.showCart = false;
    this.dataEvent.emit( this.showCart);


  }
  getTotalPrice(data :any){
   let totalPrice  =  data.price * data.selectedQuantity;
   return totalPrice;

  }
 
  onInputQuantity(data: any, event: any) {
    this.grandTotalPrice()
    if (event.value !== 0) {
      data.selectedQuantity = event.value;
    } else {
      data.selectedQuantity = 0;
      data.isAddToCart = true;

    }
    console.log('product data', this.getData);
    this.isSelectedCart = [];
    this.getData.filter((x: any) => {
      if (x.isAddToCart == false && x.selectedQuantity !== 0) {
        this.isSelectedCart.push(x);
      }
    });

    this.common.setSelectCart(this.isSelectedCart);
  }
  grandTotalPrice(){
    let sum = 0;
    this.getData?.forEach((x:any) => {
      let grandTotalPrice  =  x.price * x.selectedQuantity;
      sum = sum + grandTotalPrice;
      
    });
    return sum;

  }

}
