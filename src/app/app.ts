import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Main } from './layout/main/main';
import { ToastComponent } from './shared/toast-component/toast-component';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Main,RouterOutlet,ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('front-opensoccer');
}
