import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/pages/header/header.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ConhecimentoComponent } from './components/pages/conhecimento/conhecimento.component';
import { CampeoesComponent } from './components/pages/campeoes/campeoes.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InicioComponent,ConhecimentoComponent, CampeoesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primeiro Projeto Angular';
  
}
