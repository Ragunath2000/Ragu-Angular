import { Component, OnInit } from '@angular/core';
import { ReviewDTO } from 'src/app/Models/ReviewDTO';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-canceledreview',
  templateUrl: './canceledreview.component.html',
  styleUrls: ['./canceledreview.component.css']
})
export class canceledreviewComponent implements OnInit {

  
  constructor(private reviewService: ReviewService){}
  data: any

  ngOnInit(): void {
    this.GetReviewByStatus()
  }
  GetReviewByStatus(){
  this.reviewService.getReviewByStatus(2).subscribe(res => {
    console.log(res)
    this.data = res
  })
}
}
