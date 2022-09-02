import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // url='http://localhost:3000'
  userJourney:any
  adminurl= 'http://localhost:3000/admin';
  userurl= 'http://localhost:3000/user';
  ownerurl= 'http://localhost:3000/owner';
  hotelurl= 'http://localhost:3000/hotel';
  editId: any;
  getApiData: any;
  postData: any=[];
  postDataObj: any;



  constructor(private http : HttpClient) { }

  //getAdminCall
  getAdminCall(){
    return this.http.get(this.adminurl);
  }
  //postAdmincall
  postAdminCall(data:any){
    return this.http.post(this.adminurl, data)
  }
 //getUserCall
  getUserCall(){
    return this.http.get(this.userurl)
  }
  //postUserCall
  postUserCall(data:any){
    return this.http.post(this.userurl, data)
  }
  //  getOwnerCall
  getOwnerCall(){
    return this.http.get(this.ownerurl)
  }
  //postOwnercall
  postOwnerCall(data:any){
    return this.http.post(this.ownerurl,data)
  }
  //getHotelCall
  getHotelCall(){
    return this.http.get(this.hotelurl)
  }
    //getHotelCall by Id
    getHotelCallById(id:any){
      return this.http.get(this.hotelurl+ "/" + id)
    }
  //postHotelCall
  postHotelCall(data:any){
    return this.http.post(this.hotelurl,data)
  }
 //deletOwnerApiCall
  deletHotelCall(id:any){
    return this.http.delete(this.hotelurl + "/" + id)
  }
  //putOwnerCall
  putHotelCall(id:any,body:any){
    return this.http.put(this.hotelurl + "/" + id, body)
  }

// postApiCall(data:any){
//  return this.http.post(this.url,data)
// }
// getApiCall(){
//   return this.http.get(this.url + "/" + this.userJourney)
// }
}
