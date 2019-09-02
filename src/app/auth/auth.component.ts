import { Component, OnInit , Input} from '@angular/core';
import { MediaChange, MediaObserver /* ObservableMedia */} from '@angular/flex-layout';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']

})

export class AuthComponent implements OnInit {
  @Input() isVisible = true;
  visibility = 'shown';

  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private mediaObserver: MediaObserver /* media: ObservableMedia */) { }

	ngOnInit() {
    // https://github.com/angular/flex-layout/blob/master/CHANGELOG.md
		// this.media.subscribe((mediaChange: MediaChange) => {
    //         this.toggleView();
    //     });
		this.mediaObserver.media$.subscribe((mediaChange: MediaChange) => {

        this.toggleView();
    });
  }

  getRouteAnimation(outlet) {

      return outlet.activatedRouteData.animation;
      // return outlet.isActivated ? outlet.activatedRoute : ''
  }

	toggleView() {
		// if (this.media.isActive('gt-md')) {
		if (this.mediaObserver.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if (this.mediaObserver.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.mediaObserver.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}


}
