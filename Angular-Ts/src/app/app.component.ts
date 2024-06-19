import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TablaCursosComponent,
    TablaAlumnosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
    cursos:boolean = true

    handleCambio(){
      this.cursos = !this.cursos
    }
}
