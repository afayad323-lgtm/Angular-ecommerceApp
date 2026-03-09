import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Order } from './order/order';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'task2';
}
