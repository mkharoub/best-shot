import {Component} from '@angular/core';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appTheme = 'light';

  onThemeChanged() {
    if (this.appTheme === 'light') {
      this.appTheme = 'dark';
      return;
    }

    this.appTheme = 'light';
  }
}
