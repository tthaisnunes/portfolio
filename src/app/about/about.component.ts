import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  @HostListener("window:wheel", ['$event'])
  onWindowWheel(e) {
    setTimeout(() => this.evListener(e), 500);
  }

  evListener(e) {
    const _this = this;
    var handler = function (e) {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const pos = scrollHeight - clientHeight;

      if (document.documentElement.scrollTop == 0) {
        if (e.deltaY < 0) {
          document.removeEventListener("wheel", handler, false)
          _this.router.navigate(['/home']);
        }
      }

      if (Math.round(document.documentElement.scrollTop) == pos) {
        if (e.deltaY > 0) {
          document.removeEventListener("wheel", handler, false)
          _this.router.navigate(['/skills']);
        }
      }
    }

    document.addEventListener("wheel", handler, false)
  }

}
