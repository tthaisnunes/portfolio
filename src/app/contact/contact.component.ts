import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // @HostListener('scroll', ['$event'])
  // onScroll(event: any) {
  //   if (event.target.offsetHeight + Math.round(event.target.scrollTop) == event.target.scrollHeight) {
  //     this.router.navigate(['/projects']);
  //   }
  // }

}
