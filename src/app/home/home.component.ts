import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title_name = "{ Thais Souza }";
  btnOvered;
  aboutOvered;
  projectsOvered;
  skillsOvered;
  contactOvered;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    var wrapper = document.querySelector('.wrapper svg')
    function draw() {
      wrapper.classList.add('active');
    }
    setTimeout(draw, 300);
  }

  @HostListener("window:wheel", ['$event'])
  evListener(e) {
    const _this = this;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const pos = scrollHeight - clientHeight;

    if (Math.round(document.documentElement.scrollTop) == pos) {
      if (e.deltaY > 0) {

        var wrapper = document.querySelector('.wrapper svg')
        wrapper.classList.remove('active');

        setTimeout(changeRoute, 3000);
      }
    }

    function changeRoute() {
      _this.router.navigate(['/about']);
    }

  }
}
