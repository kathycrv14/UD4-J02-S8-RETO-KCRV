import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = "Angular";
  password = "123456";
  paginas = ["Home", "Support", "Contact"];
  resultado = false;
  mensaje = "";

  Validar (user : string, contrasena : string){
    if(user == this.usuario && contrasena == this.password){
      this.resultado = true;
      this.mensaje = "Bienvenido " + this.usuario;
    }else{
      this.resultado = false;
      this.mensaje = "Credenciales incorrectas";
    }
  }
}
