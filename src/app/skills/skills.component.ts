import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + Math.round(event.target.scrollTop) == event.target.scrollHeight) {
      this.router.navigate(['/projects']);
    }
  }

}
