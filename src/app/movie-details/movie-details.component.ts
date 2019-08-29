import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  detailsData: any;

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
     console.log(this.data)
   let  value=this.data;
    this. getFileDetailsData(value) 
  }
  getFileDetailsData(value) {
    this.dataService.getDetailsMovie(value).subscribe(
      data => this.getFileResponseData(data),
      err => this.getFilerrorResponse(err)
    )
  }

  getFileResponseData(data) {
    console.log(data)
    this.detailsData=data;
  }

  getFilerrorResponse(err) {
    console.log(err)
  }

  close(){
    this.dialogRef.close();
  }

}
