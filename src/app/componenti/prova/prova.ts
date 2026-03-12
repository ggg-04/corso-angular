import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  standalone: false,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova{
  title="Corso Angular"

  cani = [
    {
      nome:'roger',
      razza:'golden',
      descrizione:'balanqsuvwuixgwicne'
    }
  ]

  isDisable = false;

  hoCliccato(e:any){
    console.log(e);
  }

  onInput(e:Event){
    console.log((<HTMLInputElement>e.target).value);
  }

}
