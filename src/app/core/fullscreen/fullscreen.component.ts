import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import {Screenfull} from 'screenfull';

@Component({
  selector: 'cdk-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {
	isFullscreen = false;
  	constructor() { }

  	ngOnInit() {
  	}

  	toggleFullscreen() {
	    if ((screenfull as Screenfull).enabled) {
        (screenfull as Screenfull).toggle();
	      	this.isFullscreen = !this.isFullscreen;
	    }
  	}

}
