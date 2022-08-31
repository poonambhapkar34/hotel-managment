import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-osucces',
  templateUrl: './osucces.component.html',
  styleUrls: ['./osucces.component.scss']
})
export class OsuccesComponent implements OnInit {
  apidata: any;
  flag = false;

  constructor(private dataservice: DataService, private route : Router) { }

  ngOnInit(): void {
    this.getHotelDetails()
  }

  async getHotelDetails() {
    // this.dataservice.getHotelCall().subscribe((data) => {
    //   this.apidata =data
    //   console.log(data);
    // })
    this.apidata = await this.dataservice.getHotelCall().toPromise();

    this.flag = true

  }
  td(d: any) {
    console.log(d);
    console.log(d.value);
  }

  //deletApi
  deletData(id: any) {
    this.dataservice.deletHotelCall(id).subscribe((data) => {
      this.apidata.data
      console.log(data);
    })
    //to refresh hotel list
    this.getHotelDetails()
  }

  getData() {
    this.dataservice.getHotelCall().subscribe((data) => {
      this.apidata.data
      console.log(data);
    })
  }
 async editData(id: any) {
    this.dataservice.editId = id;
    // this.dataservice.getHotelCall().subscribe((data) => {
    //   this.dataservice.getApiData  = data
    //       })
    // this.dataservice.getHotelCallById(id).subscribe((resp=>{
    //   this.dataservice.getApiData  = resp;
    // }))
    this.dataservice.getApiData  = await this.dataservice.getHotelCallById(id).toPromise()
      
          this.route.navigateByUrl('/hoteldetail')

  }
}
