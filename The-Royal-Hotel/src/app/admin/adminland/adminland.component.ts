import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminland',
  templateUrl: './adminland.component.html',
  styleUrls: ['./adminland.component.scss']
})
export class AdminlandComponent implements OnInit {
  hotelData: any;
  showReq: boolean =false;
  pData: any;
 // obj:any={};
  hotelObjData: any;

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.hotelData = this.dataservice.postData;
    this.hotelObjData = this.dataservice.postDataObj;
  }

  hotelReq(){
      console.log('h Data',this.hotelData);
    
    if(this.hotelData){
      this.showReq= true;

    }
    else{
      alert('no requests available')
    }
  }
  rejectRequest(){
    this.showReq= false;

  }
  acceptRequest(){
   //post hotel data

    // for (var i = 0; i < this.hotelData.length; ++i){
    //     this.obj[i] = this.hotelData[i];
    // }
   
  this.dataservice.postHotelCall( this.hotelObjData ).subscribe((res) => {
        console.log(res);
      })
      this.showReq= false;
  }
}
