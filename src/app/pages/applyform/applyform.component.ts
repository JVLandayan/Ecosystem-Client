import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.scss']
})
export class ApplyformComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addJsToElement(
      '../../../assets/js/index.js'
    ).onload = (teste) => {
      console.log(teste);
      console.log();
    };
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  // tslint:disable-next-line: typedef

}
