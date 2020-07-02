import { Component, OnInit, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  renderer: Renderer2

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

  ngOnInit() {
  }

  enableDark(){
    this.renderer.addClass(this.document.body, 'dark-theme')

  }


  enableLight(){
    this.renderer.removeClass(this.document.body, 'dark-theme')
  }

}
