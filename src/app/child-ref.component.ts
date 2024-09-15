import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'child-ref',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `
    <h3>Ссылки на ресурсы</h3>
    <ul>
      <li *ngFor="let link of links">
        <a [href]="link.url">{{ link.text }}</a>
      </li>
    </ul>
    <input [(ngModel)]="linkUrlInput" placeholder="Введите URL ссылки" />
            <input [(ngModel)]="linkTextInput" placeholder="Введите текст ссылки" />
            <button (click)="addLink()">Добавить ссылку</button>
  `,
    styles: [`h3, li {color:#00008b; font-size:20px; font-weight:bold; margin-bottom:20px}
        input {width:200px; height:30px; margin-right:10px; margin-bottom:5px} ul {list-style-type: none} button {width:200px; height:36px; border-radius:10px; background-color:#00008b; color:white}`]
})
export class ChildRefComponent {
    links: { url: string, text: string }[] = [
        { url: 'https://en.wikipedia.org/wiki/Bill_Gates', text: 'Bill Gates - Wikipedia' },
        { url: 'https://www.gatesfoundation.org/', text: 'Gates Foundation' },
        { url: 'https://www.gatesnotes.com/', text: 'Gates Notes' },
        { url: 'https://twitter.com/billgates', text: 'Bill Gates on Twitter' },
        { url: 'https://file.liga.net/persons/bill-geyts', text: 'Bill Gates - Liga.net' }
    ];
    linkUrlInput = '';
    linkTextInput = '';

    // linkInput = { url: '', text: '' };
    addLink() {
        if (this.linkUrlInput && this.linkTextInput) {
            this.links.push({ url: this.linkUrlInput, text: this.linkTextInput });
            this.linkUrlInput = ''; // Очищаем поля ввода
            this.linkTextInput = '';
        }
    }
}




// <li><a href="https://en.wikipedia.org/wiki/Bill_Gates" target = "_blank" > Bill Gates -
//     Wikipedia </a>
//     </li>
//     < li > <a href="https://www.gatesfoundation.org/" target = "_blank" > Gates Foundation < /a></li >
//         <li><a href="https://www.gatesnotes.com/" target = "_blank" > Gates Notes < /a></li >
//             <li><a href="https://twitter.com/billgates" target = "_blank" > Bill Gates on Twitter < /a></li >
//                 <li><a href="https://file.liga.net/persons/bill-geyts" target = "_blank" > Bill Gates - Liga.net </a>