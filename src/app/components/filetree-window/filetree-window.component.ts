// vs-code-window.component.ts
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filetree-window',
  standalone: true,
  templateUrl: './filetree-window.component.html',
  styleUrls: ['./filetree-window.component.css']
})
export class FiletreeWindowComponent implements AfterViewInit {
  @ViewChild('terminal') terminal!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const data = [
      { action: 'type', strings: ["npm install -g mimik^400"], output: '<span class="gray">+mimik@0.10.2 installed</span><br>&nbsp;', postDelay: 1000 },
      { action: 'type', strings: ["cd tests^400"], output: ' ', postDelay: 1000 },
      { action: 'type', strings: ['mimik run^400'], output: 'Executing mimik...', postDelay: 1000 },
      { action: 'type', strings: ["that was easy!"], postDelay: 2000 }
    ];

    this.runScripts(data, 0);
  }

  private runScripts(data: any[], pos: number) {
    const terminal = this.terminal.nativeElement;
    const prompt = terminal.querySelector('.prompt');

    if (pos >= data.length) {
      return;
    }

    const script = data[pos];
    if (script.clear === true) {
      terminal.querySelector('.history').innerHTML = '';
    }

    switch (script.action) {
      case 'type':
        prompt.innerHTML = '';
        this.typeString(prompt, script.strings, 0, () => {
          let history = terminal.querySelector('.history').innerHTML;
          history = history ? history + '<br>' : '';
          history += '$ ' + prompt.textContent;
          if (script.output) {
            history += '<br>' + script.output;
            prompt.innerHTML = '';
            terminal.querySelector('.history').innerHTML = history;
          }
          pos++;
          setTimeout(() => {
            this.runScripts(data, pos);
          }, script.postDelay || 1000);
        });
        break;
    }
  }

  private typeString(element: HTMLElement, strings: string[], stringIndex: number, callback: () => void) {
    if (stringIndex >= strings.length) {
      callback();
      return;
    }

    const str = strings[stringIndex];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < str.length) {
        element.innerHTML += str[charIndex++];
        setTimeout(typeChar, 30);
      } else {
        setTimeout(() => {
          this.typeString(element, strings, stringIndex + 1, callback);
        }, 400);
      }
    };

    typeChar();
  }
}
