import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cdk-round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {


    @Input() current;
    @Input() max;
    @Input() background;
    @Input() color;
    @Input() boxcolor;
    @Input() title;



    public radius       =    250;
    public stroke       =    '20' ;
    public semicircle   =    false;
    public rounded      =    true;
    public clockwise    =    false;
    public responsive   =    true;
    public duration     =    '800';
    public animation    =    'easeInOutQuart';

    constructor( private sanitizer: DomSanitizer) { }

    ngOnInit() {
    }
    getOverlayStyle() {
        const isSemi = this.semicircle;
        const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        // TODO: https://stackoverflow.com/questions/43035989/how-to-use-bypasssecuritytruststyle-correctly
        const useSanitizer = false;
        if ( useSanitizer ) {
          return {
            'top': this.sanitizer.bypassSecurityTrustStyle (isSemi ? 'auto' : '50%'),
            'bottom': this.sanitizer.bypassSecurityTrustStyle ( isSemi ? '5%' : 'auto'),
            'left': this.sanitizer.bypassSecurityTrustStyle ('50%'),
            'transform': this.sanitizer.bypassSecurityTrustStyle (transform), // trnasform
            '-moz-transform': this.sanitizer.bypassSecurityTrustStyle (transform),
            '-webkit-transform': this.sanitizer.bypassSecurityTrustStyle (transform),
            'font-size': this.sanitizer.bypassSecurityTrustStyle ( this.radius / 7 + 'px' )
          };

        } else {
          return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform, // trnasform
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 7 + 'px'
          };
        }
    }

}
