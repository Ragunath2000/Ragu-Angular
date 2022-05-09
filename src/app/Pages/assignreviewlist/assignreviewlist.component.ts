import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-assignreviewlist',
  templateUrl: './assignreviewlist.component.html',
  styleUrls: ['./assignreviewlist.component.css']
})
export class AssignreviewlistComponent implements OnInit {
  constructor(private reviewService: ReviewService){}
  data: any



  ngOnInit(): void {
    this.GetReviewByStatus()

  }
  GetReviewByStatus(){
    this.reviewService.getReviewByStatus(1).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }

}
