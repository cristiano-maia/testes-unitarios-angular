import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindoComponent } from "./bem-vindo/bem-vindo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BemVindoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testes-unitarios-angular';
}
