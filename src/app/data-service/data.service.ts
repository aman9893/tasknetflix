import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  key='41f14424';
 
  mainurl='http://www.omdbapi.com/?i=tt3896198&apikey=41f14424'

  constructor(public http: HttpClient) { }

  url='http://www.omdbapi.com/?apikey=41f14424'
  
  detilasurl='http://www.omdbapi.com'
  gethomePageData() {
    return this.http.get(this.url);
  }

  gethomeSearchPageData(search){
    return this.http.get(this.url+ '&s=' + search);
  }

  getDetailsMovie(detailsValue){
    return this.http.get(this.detilasurl+ '?i=' + detailsValue + '&apikey='+this.key);
  }
}
