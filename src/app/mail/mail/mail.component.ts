import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MediaChange, MediaObserver /* ObservableMedia */} from '@angular/flex-layout';

import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'cdk-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    check = false;
    allMails;
    shownMails = [];
    shownMailDetail;

    height = '500px';
    constructor(public composeDialog: MatDialog,
              private snackBar: MatSnackBar,
              @Inject('mailService') private service,
              // private media: ObservableMedia) {
              private mediaObserver: MediaObserver) {
        this.getMails();
    }

    ngOnInit() {
        this.updateHieght();
        this.mediaObserver.media$.subscribe((mediaChange: MediaChange) => {
            this.updateHieght();
        });
    }

    updateHieght() {
        const body = document.body, html = document.documentElement;
        const h = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight ) - 66;
        this.height = h + 'px';
    }

    getMails() {
        this.service.getMails().subscribe((res) => {
            this.shownMails = res;
            this.setMailStatus(false);
        });
    }
    setMailStatus(value) {
        for (const mail of this.shownMails) {
                mail.checked = value;
            }
    }

    openMailDetial(mail) {
        this.shownMailDetail = mail;
    }

    onForward(status) {
        this.shownMailDetail = null;
    }

    openComposeDialog() {
        const dialogRef = this.composeDialog.open(ComposeComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.snackBar.open('Message has been sent', '', {duration: 3000});
        });
    }
    onStatusChange(value) {
        this.check = value;
        this.setMailStatus(value);
    }
    onUncheckmail(event) {
        this.check = false;
    }

}
