import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Products } from './products/products';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'task2';
}
