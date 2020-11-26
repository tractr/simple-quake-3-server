import { Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appQ3name]'
})
export class Q3nameDirective implements OnInit {

  @Input('appQ3name') playerNameOriginal: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.el = el;
  }

  ngOnInit(): void {
    // const regex = /(\^[0-9bBfF])|(\^X[0-9]{6})/g;
    const regex = /(\^[0-9a-zA-Z])|(\^X[0-9]{6})/g;
    const founds = this.playerNameOriginal.match(regex) || [];
    const mainContainer = this.renderer.createElement('span');
    let splittedName = this.playerNameOriginal;
    for (const found of founds) {
      splittedName = splittedName.replace(found, ' ');
    }
    const playerNameArr = splittedName.split(' ');
    let lastAppend = mainContainer;
    for (let i = 0; i < playerNameArr.length; i++) {
      const found = founds[i - 1];
      const newSpan = this.renderer.createElement('span');
      newSpan.innerText = playerNameArr[i];
      Object.assign(newSpan.style, this.setColorProp(found));
      this.renderer.appendChild(lastAppend, newSpan);
      lastAppend = newSpan;
    }
    this.renderer.appendChild(this.el.nativeElement, mainContainer);
  }

  setColorProp(col) {
    switch (col) {
      case '^1':
        return {color : 'red'};
      case '^2':
        return {color : 'green'};
      case '^3':
        return {color : 'yellow'};
      case '^4':
        return {color : 'blue'};
      case '^5':
        return {color : 'cyan'};
      case '^6':
        return {color : 'magenta'};
      case '^7':
        return {color : 'white'};
      case '^8':
        return {color : 'black'};
      default:
        return {};
    }
  }


}
