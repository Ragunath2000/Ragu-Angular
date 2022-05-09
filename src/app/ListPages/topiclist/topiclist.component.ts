import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { Topic } from 'src/app/Models/topic';



import { TopiclistService } from 'src/app/service/topiclist.service';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  constructor(private topicService:TopiclistService ) { }
  data:any;
  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics(){
    this.topicService.getAllTopicByCourseId(5).
      subscribe(res =>{
        console.log(res)
        this.data=res
      })  
  }


// constructor(private topicService: TopiclistService) { }
//   data: TopicDTO[] = []
//   ngOnInit(): void {
//     this.getAll()
//   }
//   getAll() {
//     this.topicService.getAllTopicByCourseId(1).subscribe(res => {
//       console.log(res)
//       this.data = res
//     })
//   }
}
