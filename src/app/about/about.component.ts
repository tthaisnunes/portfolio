import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  age;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    var wrapper = document.querySelector('.wrapper svg')
    function draw() {
      wrapper.classList.add('active');
    }
    setTimeout(draw, 300);


    const actualY = new Date().getFullYear();
    const actualDate = new Date()
    const bithY = 1993;

    if (actualDate.getMonth() > 6) {
      this.age = actualY - bithY;
    } else {
      this.age = (actualY - 1) - bithY;
    }
  }

  @HostListener("window:wheel", ['$event'])
  onWindowWheel(e) {
    setTimeout(() => this.evListener(e), 100);
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
