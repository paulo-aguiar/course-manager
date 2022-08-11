import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent, 
    ReplacePipe, 
    NavBarComponent, 
    Error404Component, 
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //objeto de rota criada que faz o link com o componente de cursos
      {
        path: 'courses', component: CourseListComponent
      },
      //rota com path variable, utiliza-se /:nome-do-atributo e o componente que irá utilizar
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      //objeto de rota padrão vazia, que inicializa na raiz, e redireciona para a rota de cursos
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },      
      //objeto de rota padrão do angular usada quando o angular não encontar uma url definida 
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
