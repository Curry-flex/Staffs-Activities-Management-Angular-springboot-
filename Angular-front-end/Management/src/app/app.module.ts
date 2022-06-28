import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SupportReportComponent } from './support-report/support-report.component';
import { SupportLogsComponent } from './support-logs/support-logs.component';
import { ProjectEntryComponent } from './project-entry/project-entry.component';
import { ProgressProjectComponent } from './progress-project/progress-project.component';
import { CompletedProjectComponent } from './completed-project/completed-project.component';
import { ScheduleEntryComponent } from './schedule-entry/schedule-entry.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SupportListComponent } from './support-list/support-list.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetSupportDetailsComponent } from './get-support-details/get-support-details.component';
import { UpdateSupportComponent } from './update-support/update-support.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './Auth/auth.guard';
import { AuthenticationGuard } from './authentication.guard';
import { UserService } from './user.service';
import { HttpClientInterceptor } from './http-client-interceptor';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ViewEditScheduleComponent } from './view-edit-schedule/view-edit-schedule.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { IncompleteTaskComponent } from './incomplete-task/incomplete-task.component';
import { ViewProjectSpecificComponent } from './view-project-specific/view-project-specific.component';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';
import { RecipientPrintComponent } from './recipient-print/recipient-print.component';
import { ReportPrintComponent } from './report-print/report-print.component';
import { NgToastModule } from 'ng-angular-popup';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    StatsComponent,
    HomeComponent,
    SupportReportComponent,
    SupportLogsComponent,
    ProjectEntryComponent,
    ProgressProjectComponent,
    CompletedProjectComponent,
    ScheduleEntryComponent,
    ScheduleViewComponent,
    LoginComponent,
    DashboardComponent,
    SupportListComponent,
    GetSupportDetailsComponent,
    UpdateSupportComponent,
    ProjectUpdateComponent,
    ForbiddenComponent,
    ViewScheduleComponent,
    ViewEditScheduleComponent,
    CompletedTaskComponent,
    IncompleteTaskComponent,
    ViewProjectSpecificComponent,
    ReportViewerComponent,
    RecipientPrintComponent,
    ReportPrintComponent,
    PageNotFoundComponent,
    RegisterUserComponent,
    UsersListComponent
  ],

 

  imports: [
    BrowserModule,
    NgToastModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      //{path:"home",component: HomeComponent},
      // {path:"report", component: SupportReportComponent},
      // {path:"project",component:ProjectEntryComponent},
      // {path:"schedule",component: ScheduleEntryComponent},
      // {path:"view-schedule",component: ScheduleViewComponent},
      // {path:"progress-projects",component: ProgressProjectComponent},     
      // {path:"completed-projects",component: CompletedProjectComponent},
      // {path:"support-logs",component: SupportLogsComponent},
     
      {path:"",component:LoginComponent},
      //{path:"support-details/:id",component:GetSupportDetailsComponent},
      {path:"forbidden", component: ForbiddenComponent},
      {path:"report-print", component: ReportPrintComponent}, 
      
      {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard],
      children:[
       
        {path:"report", component: SupportReportComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"project",component:ProjectEntryComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"schedule",component: ScheduleEntryComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"progress-projects",component: ProgressProjectComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"completed-projects",component: CompletedProjectComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"assigned-project",component: ViewProjectSpecificComponent,canActivate:[AuthGuard],data:{roles:['User']}},
        {path:"support-logs",component: SupportLogsComponent},
        {path:"view-support" ,component: SupportListComponent},
        {path:"home",component:HomeComponent},
        {path:"support-details/:id",component:GetSupportDetailsComponent},
        {path:"update-support/:id",component: UpdateSupportComponent},
        {path:"view-schedule", component:ViewScheduleComponent,canActivate:[AuthGuard],data:{roles:['User']}} ,
        {path:"view-schedule/:id", component:ViewEditScheduleComponent,canActivate:[AuthGuard],data:{roles:['User']}} ,
        {path:"completedTask", component: CompletedTaskComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"incompleteTask",component: IncompleteTaskComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"update-project/:id",component: ProjectUpdateComponent,canActivate:[AuthGuard],data:{roles:['User']}},
         {path:"register-user",component: RegisterUserComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
         {path:"users-list",component: UsersListComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
        {path:"view-report",component: ReportViewerComponent,
        children:[
        {path:"report-print", component: ReportPrintComponent},
       
      ]
      
        },
        //{path:"**", component: PageNotFoundComponent}
      ]
       
      },
      {path:"**", component: PageNotFoundComponent}
    ])
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpClientInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
