import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  email: string = ""
  direccion: string = ""
  telefono: string = ""
  comunidad: string = "madrid"
  formapago: string = ""
  informacion: boolean = false
  resultado: string =""
  constructor(){}
  ngOnInit(): void{
  }
  enviar(){
    this.resultado=this.email + "\n" + this.direccion + "\n" + "\n" + this.telefono
    + "\n" +this.comunidad + "\n" + this.formapago + "\n" + (this.informacion?"Acepta":"No acepta")
    }
}
