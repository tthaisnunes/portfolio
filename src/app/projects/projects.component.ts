import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + Math.round(event.target.scrollTop) == event.target.scrollHeight) {
      this.router.navigate(['/contact']);
    }
  }

}
