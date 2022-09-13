import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerland',
  templateUrl: './ownerland.component.html',
  styleUrls: ['./ownerland.component.scss']
})
export class OwnerlandComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    console.log('owner landing-------------->');
    
    this.dataservice.getWeatherData().subscribe(data=>{
        console.log('Normal..',data);

              })
    this.dataservice.getWeatherDataDynamic().subscribe(data=>{
                console.log('dynamic..',data);
              })
    // this.dataservice.getApiCall().subscribe(data=>{
    //   console.log(data);
      
    // })
  }

}
