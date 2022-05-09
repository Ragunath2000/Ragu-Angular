import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BreadcrumsComponent } from './Components/breadcrums/breadcrums.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchComponent } from './Components/search/search.component';

import { PaginationComponent } from './Components/pagination/pagination.component';

import { AddCoordinatorComponent } from './Coordinator/CRUD/add-coordinator/add-coordinator.component';
import { EditCoordinatorComponent } from './Coordinator/CRUD/edit-coordinator/edit-coordinator.component';
import { CoordinatorService } from './Coordinator/Data/coordinator.service';
import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddbuttonComponent } from './Components/addbutton/addbutton.component';
import { SavebuttonComponent } from './Components/savebutton/savebutton.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';
import { TraineefeedbackComponent } from './Pages/traineefeedback/traineefeedback.component';
import { TraineefeedbackviewComponent } from './Pages/traineefeedbackview/traineefeedbackview.component';
import { UploadmomComponent } from './Pages/uploadmom/uploadmom.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { canceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { CoDepartmentlistComponent } from './ListPages/co-departmentlist/co-departmentlist.component';
// import { CourselistComponent } from './ListPages/courselist/courselist.component';

import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';
import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReviewlistComponent } from './ListPages/reviewlist/reviewlist.component';
import { ReviewerlistComponent } from './ListPages/reviewerlist/reviewerlist.component';
import { TraineelistComponent } from './ListPages/traineelist/traineelist.component';
import { TrainerlistComponent } from './ListPages/trainerlist/trainerlist.component';
import { CoordinatorlistComponent } from './ListPages/coordinatorlist/coordinatorlist.component';
import { ViewreviewerprofileComponent } from './Pages/viewreviewerprofile/viewreviewerprofile.component';
import { ViewtraineeprofileComponent } from './Pages/viewtraineeprofile/viewtraineeprofile.component';
import { ViewtrainerprofileComponent } from './Pages/viewtrainerprofile/viewtrainerprofile.component';
import { ViewcoprofileComponent } from './Pages/viewcoprofile/viewcoprofile.component';
import { ViewheadprofileComponent } from './Pages/viewheadprofile/viewheadprofile.component';
import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { AppRoutingModule } from './app-routing.module';
import { completedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';
import { ScheduledreviewComponent } from './scheduledreview/scheduledreview.component';
import { AssigncourseComponent } from './Pages/cancelreviewlist/assigncourse/assigncourse.component';
import { AssignreviewCoComponent } from './Pages/assignreview-co/assignreview-co.component';
import { AddcourseComponent } from './Pages/addcourse/addcourse.component';
import { AdddepartmentComponent } from './Pages/adddepartment/adddepartment.component';
import { AddreviewerComponent } from './Pages/addreviewer/addreviewer.component';
import { AddtraineeComponent } from './Pages/addtrainee/addtrainee.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { EdituserComponent } from './Pages/edituser/edituser.component';
import { AddusersComponent } from './Pages/addusers/addusers.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumsComponent,
    FilterComponent,
    SearchComponent,
    FooterComponent,
    PaginationComponent,
    AddbuttonComponent,
    SavebuttonComponent,
    AddCoordinatorComponent,
    EditCoordinatorComponent,
    CommonhomeComponent,
    LoginpageComponent,
    HomeComponent,
    DashboardComponent,
    ProfileviewComponent,
    TraineefeedbackComponent,
    TraineefeedbackviewComponent,
    UploadmomComponent,
    ViewmomComponent,
    canceledreviewComponent,
    HeadDepartmentlistComponent,
    CoDepartmentlistComponent,
    // CourselistComponent,
    ViewheadprofileComponent,
    ViewcoprofileComponent,
    ViewtrainerprofileComponent,
    ViewtraineeprofileComponent,
    ViewreviewerprofileComponent,
    CoordinatorlistComponent,
    TrainerlistComponent,
    TraineelistComponent,
    ReviewerlistComponent,
    ReviewlistComponent,
    // CourselistComponent,
      TopiclistComponent,
      ViewcourseCoordinatorComponent,
      FeedbacktraineeComponent,
      AssignreviewlistComponent,
      ViewattendanceComponent,
      completedreviewlistComponent,
      ScheduledreviewComponent,
    AddcourseComponent,
      ViewcourseCoordinatorComponent,
      FeedbacktraineeComponent,
      AssignreviewlistComponent,
      completedreviewlistComponent,
      canceledreviewComponent,
      ViewattendanceComponent,
      canceledreviewComponent,
      AssigncourseComponent,
      AssignreviewCoComponent,
      AddcourseComponent,
      AdddepartmentComponent,
      AddreviewerComponent,
      AddtraineeComponent,
    TopicviewComponent,
    SidebarComponent,
    EdituserComponent,
    AddusersComponent,
    TopiclistComponent
      
  ],


  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CoordinatorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
