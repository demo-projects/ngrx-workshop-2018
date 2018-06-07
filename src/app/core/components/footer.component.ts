import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
      <span class="text-muted">nirkaufman@gmail.com</span>
    </div>
  </footer>
  `,
  styles: [`
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      line-height: 60px;
      background-color: #f5f5f5;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
