import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoordinatorComponent } from './Coordinator/CRUD/add-coordinator/add-coordinator.component';
import { CoOrdinatorAddCourseComponent } from './Pages/co_addcourse/co-ordinator-add-course.component';
import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';

import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';

import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { CoordinatorlistComponent } from './ListPages/coordinatorlist/coordinatorlist.component';
import { ReviewerlistComponent } from './ListPages/reviewerlist/reviewerlist.component';
import { ReviewlistComponent } from './ListPages/reviewlist/reviewlist.component';
import { TraineelistComponent } from './ListPages/traineelist/traineelist.component';
import { TrainerlistComponent } from './ListPages/trainerlist/trainerlist.component';
import { ViewcoprofileComponent } from './Pages/viewcoprofile/viewcoprofile.component';
import { AssigncourseComponent } from './Pages/cancelreviewlist/assigncourse/assigncourse.component';
import { AssignreviewCoComponent } from './Pages/assignreview-co/assignreview-co.component';
import { AddcourseComponent } from './Pages/addcourse/addcourse.component';
import { AdddepartmentComponent } from './Pages/adddepartment/adddepartment.component';
import { ViewtrainerprofileComponent } from './Pages/viewtrainerprofile/viewtrainerprofile.component';
import { ViewtraineeprofileComponent } from './Pages/viewtraineeprofile/viewtraineeprofile.component';
import { ViewreviewerprofileComponent } from './Pages/viewreviewerprofile/viewreviewerprofile.component';
import { UploadmomComponent } from './Pages/uploadmom/uploadmom.component';
import { ViewheadprofileComponent } from './Pages/viewheadprofile/viewheadprofile.component';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { CoDepartmentlistComponent } from './ListPages/co-departmentlist/co-departmentlist.component';
import { CoursefeedbackComponent } from './Pages/coursefeedback/coursefeedback.component';
// import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { EdituserComponent } from './Pages/edituser/edituser.component';
import { AddusersComponent } from './Pages/addusers/addusers.component';
import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { canceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { completedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';


const routes: Routes = [
  
  { path:'courses', component:AddcourseComponent},
  { path:'coursefeedback', component:CoursefeedbackComponent},
  { path:'topiclist', component:TopiclistComponent},
  //add routing for users
  { path:'TraineeList/addtrainee', component:AddusersComponent},
  { path:'CoordinatorList/addcoordinator', component:AddusersComponent},
  { path:'ReviewerList/addreviewer', component:AddusersComponent},
  { path:'TrainerList/addtrainer', component:AddusersComponent},
  //edit routing for users
  { path:'TraineeList/edittrainee', component:EdituserComponent},
  { path:'CoordinatorList/editcoordinator', component:EdituserComponent},
  { path:'ReviewerList/editreviewer', component:EdituserComponent},
  { path:'TrainerList/edittrainer', component:EdituserComponent},

  { path:'departments', component:HeadDepartmentlistComponent},
  { path: 'AddCourse', component: CoOrdinatorAddCourseComponent },
  { path: 'Login', component: LoginpageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Profileview', component: ProfileviewComponent },
  {path: 'canceledreview', component:canceledreviewComponent},

  { path:'viewcourse', component:ViewcourseCoordinatorComponent},
  // {path:'courselist', component:CourselistComponent},
  {path:'viewmom', component:ViewmomComponent},
  {path:'feedbacktrainee', component:FeedbacktraineeComponent},
  {path:'assignreviewlist', component:AssignreviewlistComponent},
  {path:'completedreviewlist', component:completedreviewlistComponent},
  {path:'viewattendance', component:ViewattendanceComponent},
  {path:'coordinatorlist', component:CoordinatorlistComponent},
  {path:'reviewerlist', component:ReviewerlistComponent},
  {path:'reviewlist', component:ReviewlistComponent},
  {path:'traineelist', component:TraineelistComponent},
  {path:'trainerlist', component:TrainerlistComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'profileview', component:ProfileviewComponent},
  {path:'viewattendance', component:ViewattendanceComponent},
  {path:'viewcoprofile', component:ViewcoprofileComponent},
  {path:'assigncourse', component:AssigncourseComponent},
  {path:'assignreviewco', component:AssignreviewCoComponent},
  {path:'addcourse', component:AddcourseComponent},
  {path:'adddepartment', component:AdddepartmentComponent},
  
  { path:'viewtrainerprofile', component:ViewtrainerprofileComponent},
  {path:'viewtraineeprofile', component:ViewtraineeprofileComponent},
  { path:'viewreviewerprofile', component:ViewreviewerprofileComponent},
  {path:'uploadmom',component:UploadmomComponent},
  {path:'headprofile',component:ViewheadprofileComponent},
  {path:'coprofile',component:ViewcoprofileComponent},
  
  { path:'cancelreview', component:canceledreviewComponent },
  { path:'viewcourse', component:ViewcourseCoordinatorComponent },
  // { path:'courselist', component:CourselistComponent },
  { path:'viewmom', component:ViewmomComponent },
  { path:'feedbacktrainee', component:FeedbacktraineeComponent },
  { path:'assignreviewlist', component:AssignreviewlistComponent },
  { path:'viewattendance', component:ViewattendanceComponent },
  { path: 'viewtopic', component:TopicviewComponent },  
  { path:'cancelreview', component:canceledreviewComponent },
  { path: 'deptlist', component:CoDepartmentlistComponent},

  //Common Home
  { path: '', component: CommonhomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }