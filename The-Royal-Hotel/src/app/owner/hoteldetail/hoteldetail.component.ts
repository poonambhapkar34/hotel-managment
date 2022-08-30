import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hoteldetail',
  templateUrl: './hoteldetail.component.html',
  styleUrls: ['./hoteldetail.component.scss']
})
export class HoteldetailComponent implements OnInit {
  regitrationForm!:FormGroup;

dataId:any;
editData:any;
editIdArray:any=[];
  constructor(private fb:FormBuilder, private dataservice : DataService) { }

  ngOnInit(): void {
    console.log('hoteldetails');
  
    this.dataId = this.dataservice.editId;
    this.editData = this.dataservice.getApiData;
    console.log('data.......', this.editData);
    this.dataId ?  this.fetchIdData() : this.formData();
    this.fetchIdData()

   
   
  }
    fetchIdData(){
      for(let i = 0; i < this.editData.length ; i++){
        if(this.editData[i].id == this.dataId ){
          this.editIdArray.push(this.editData[i])

        }
      
      }
      console.log('  this.editIdArray',  this.editIdArray);
      
      console.log('id data'  ,this.editIdArray[0].userName);
      this.formData();

  }


  formData(){
    this.regitrationForm = this.fb.group({
      userName:[ this.editIdArray ? this.editIdArray[0].userName : '',[Validators.required,Validators.maxLength(40)]],
      hotelName:[ this.editIdArray ? this.editIdArray[0].hotelName :'',[Validators.required,]],
      hotelAddress: [this.editIdArray ? this.editIdArray[0].hotelAddress :'',[Validators.required]],
      hotelMobile:[ this.editIdArray ? this.editIdArray[0].hotelMobile :'',[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]{10}')]],
      hotelMenu:[ this.editIdArray ? this.editIdArray[0].hotelMenu :'',[Validators.required]],
      roomAvailable:[ this.editIdArray ? this.editIdArray[0].roomAvailable :'',Validators.required],
      owenrCheck:[ this.editIdArray ? this.editIdArray[0].owenrCheck :'',[Validators.requiredTrue]],
      userPass:[ this.editIdArray ? this.editIdArray[0].userPass :'',[Validators.required, Validators.maxLength(8)]],

    });
  }


  postHoteldata(data:any){
    // console.log(data);
    //post hotel data
    this.dataservice.postHotelCall(data).subscribe((res)=>{
      console.log(res);

  })}

}
