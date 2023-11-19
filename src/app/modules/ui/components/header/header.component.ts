import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output('onThemeChanged') onThemeChanged = new EventEmitter();

  onDarkThemeClicked() {
    this.onThemeChanged.emit();
  }
}
