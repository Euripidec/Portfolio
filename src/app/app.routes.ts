import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';

export const routes: Routes = [
    {
        path: '',
        component: IntroPageComponent
    },

    {
        path: '**',
        redirectTo: 'home'
    },

    {
        path: 'home',
        component: HomePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }