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
          _this.router.navigate(['/projects']);
        }
      }

    }

    document.addEventListener("wheel", handler, false)
  }

}
