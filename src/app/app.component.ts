
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { ChildRefComponent } from './child-ref.component';
import { ChildQuoteComponent } from './child-quote.component';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'my-app',
	standalone: true,
	imports: [FormsModule, CommonModule, ChildQuoteComponent, ChildRefComponent, ChildComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})


export class AppComponent {
	quoteNew: string = "";
	linkNew: string = "";
	linkTextNew: string = "";
	quotes: string[] = [];
	links: { url: string, text: string }[] = [];

	@ViewChild(ChildQuoteComponent) quotesComp;
	@ViewChild(ChildRefComponent) refComp;

	addQ() {
		if (this.quoteNew) {
		
			this.quotesComp.addQuote();  // Добавляем новую цитату 
			this.quoteNew = ''; // Очищаем поле ввода
		}
	}
	addL() {
		if (this.linkNew && this.linkTextNew) {
			this.refComp.addLink();//Добавляем новую ссылку 
			this.linkNew = ''; // Очищаем поля ввода
			this.linkTextNew = '';
		}
	}
}






