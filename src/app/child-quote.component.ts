import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'child-quote',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `
    <h2>Цитаты Билла Гейтса</h2>
    <ul>
      <li *ngFor="let quote of quotes">{{ quote }}</li>
    </ul>
      <input [(ngModel)]="quoteInput" placeholder="Введите цитату">
    <button (click)="addQuote()">Добавить цитату</button>
  `,
    styles: [`h2{color:#00008b} li {color:#00008b; font-style:italic; font-size:20px; font-weight:bold; margin-bottom:20px}
        input {width:200px; height:30px; margin-right:10px} ul {list-style-type: none} button {width:200px; height:36px; border-radius:10px; background-color:#00008b; color:white}`]
})
export class ChildQuoteComponent {
    quotes: string[] = ['«Patience is a key element of success»',
        '«If you think your teacher is tough, wait till you get a boss»',
        '«Life is not fair — get used to it!»',
        '«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»',
        '«Be nice to nerds. Chances are you’ll end up working for one»'];

    quoteInput: string = '';
    addQuote() {
        if (this.quoteInput) {
            this.quotes.push(this.quoteInput);
            this.quoteInput = "";
        }
    }
}

