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

  persone = [
    {nome:'Luca', cognome:'Purino', isOnline:true, colore:'green'},
    {nome:'Paola', cognome:'Strumel', isOnline:false, colore:'red'},
    {nome:'Anna', cognome:'Berola', isOnline:true, colore:'grey'},
    {nome:'Marcello', cognome:'Zucchetti', isOnline:false, colore:'blue'},
    {nome:'Francesco', cognome:'Andreotti', isOnline:true, colore:'pink'}
    ]

  daVedere:boolean = true;

  isDisable = false;

  hoCliccato(e:any){
    console.log(e);
  }

  onInput(e:Event){
    console.log((<HTMLInputElement>e.target).value);
  }

}
