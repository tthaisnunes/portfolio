import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  wheeled = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  @HostListener("window:wheel", ['$event'])
  onWindowWheel(event) {
    if (!this.wheeled) {
      console.log('aq');
      this.wheeled = true;
    }
    // const scrollHeight = document.documentElement.scrollHeight;
    // const clientHeight = document.documentElement.clientHeight;
    // const pos = scrollHeight - clientHeight;

    // if (document.documentElement.scrollTop) {
    //   if (event.deltaY < 0) {
    //     // scrolling up
    //     this.router.navigate(['/home']);
    //   }
    // }

    // if (Math.round(document.documentElement.scrollTop) == pos) {
    //   if (event.deltaY > 0) {
    //     // scrolling down
    //     this.router.navigate(['/skills']);
    //   }
    // }
  }

}
