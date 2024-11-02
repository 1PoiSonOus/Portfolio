    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './component/home/home.component';
    import { AboutComponent } from './component/about/about.component';
    import { ProjectsComponent } from './component/projects/projects.component';
    import { ContactComponent } from './component/contact/contact.component';
    import { CommonModule } from '@angular/common';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



    export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule,BrowserAnimationsModule],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

