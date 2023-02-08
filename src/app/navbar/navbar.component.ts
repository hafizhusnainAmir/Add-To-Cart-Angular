import { Component, OnInit} from '@angular/core';
import { CommonService } from '../service/common.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showCart = false;
  length:any;

  
  constructor( public common: CommonService) { }

  ngOnInit(): void {
    this.common.cartSelect.subscribe(data =>{
        if(data){
          getData = JSON.parse(data);
          this.length = getData?.length;
         
        }
    })
    let getData:any = localStorage.getItem('SelectedCart');
    getData = JSON.parse(getData);
    this.length = getData?.length;
    

   console.log("gett data",this.length);
  //  this.common.cartSelect.subscribe(data => {
  //    console.log("the cart data is",data);
  //  })
   
  }

  onDataReceived(data: any) {
    console.log("the data form child",data);
    this.showCart = data;
  }
  onOpenCart(){
    
    if(this.showCart === true){
      this.showCart = false;
      console.log("true")

    }
    else if(this.showCart === false){
      this.showCart = true
      console.log("false")
      // let getData:any = localStorage.getItem('SelectedCart');
      // getData = JSON.parse(getData);
      // console.log("the daaaaaaa",getData);
      // this.common.cartSelect.subscribe((data:any)=>{
      //   getData = data
      //   console.log("the cart data isss",getData);
      // })

    }
    console.log("click",this.showCart);

  }

}
