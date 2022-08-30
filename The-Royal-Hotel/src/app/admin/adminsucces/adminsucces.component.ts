import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsucces',
  templateUrl: './adminsucces.component.html',
  styleUrls: ['./adminsucces.component.scss']
})
export class AdminsuccesComponent implements OnInit {
  apidata: any;


  constructor(private router : Router, private dataservice : DataService) { }

  ngOnInit(): void {
    this.dataservice.getHotelCall().subscribe((data)=>{
      this.apidata=data
      console.log(data);
      })
    
  }
  newChange():void{
    this.router.navigateByUrl('adminsignin')
  }
 //deletApi
  deletData(id:any){
 this.dataservice.deletHotelCall(id).subscribe((data)=>{
  console.log(data);
 })
  }
  getData(){
    this.dataservice.getHotelCall().subscribe((data)=>{
      this.apidata=data
      console.log(data);
      })
  }
}
