/*/
# Por: FsDk, Jose Antonio Gimenez http://www.eScripting.org
# 22/04/2022           
# Puedes modificar siempre que quieras el codigo lo publico como ejemplo  
# Pero en ningún momento quiero que quites estas lineas de créditos 
# espero que te pueda servir  y sea de tu agrado. 
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
Titulo = 'Aplicacion Simple Calculadora';
valorA:number = 0 ;
valorB:number = 0;
resultado:number = 0;

 sumar():void {
  this.resultado =  this.valorA + this.valorB;
  console.log( this.resultado );
 }
 }
