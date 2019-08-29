import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { MatDialog } from '@angular/material';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  serchResult: any;
  totalResult: any;
  errormessage: any;

  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit() { 
    
  }

  search(value){
      console.log(value)
      this.getFileData(value) 
  }

  getFileData(value) {
    this.dataService.gethomeSearchPageData(value).subscribe(
      data => this.getFileResponseData(data),
      err => this.getFilerrorResponse(err)
    )
  }

  getFileResponseData(data) {
    console.log(data)
    if(data.Response === "True"){
     this.serchResult =data.Search;
     console.log( this.serchResult)
     this.totalResult= data.totalResults;
    }
     if(data.Response === 'False'){
       console.log(data.Error)
       this.errormessage=data.Error

     }
  }

  getFilerrorResponse(err) {
    console.log(err)
  }

  detailsMovie(id) {
    let dialogRef = this.dialog.open(MovieDetailsComponent, {
      height: '600px',
      width: '700px',
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

