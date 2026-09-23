import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html'
})
export class LoginComponent {
  
  usuarioCorrecto: string = 'admin';
  contrasenaCorrecta: string = '12345';

  
  usuarioIngresado: string = '';
  contrasenaIngresada: string = '';
  mensaje: string = '';

  validarAcceso(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      this.mensaje = 'El nombre de usuario no es válido.';
    } else if (this.contrasenaIngresada !== this.contrasenaCorrecta) {
      this.mensaje = 'La contraseña no es válida.';
    } else {
      this.mensaje = 'Bienvenido al sistema, ' + this.usuarioIngresado + '.';
    }
  }
}