import { Component } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Docker';
  usuarios: any[] = [];

  constructor(private pruebaService: PruebaService){

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.pruebaService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios,
      console.log(this.usuarios)
    });
  }
}
