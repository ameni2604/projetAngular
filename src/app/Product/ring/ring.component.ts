import { Component } from '@angular/core';
import { HeaderComponent } from '../../Header/header/header.component';
import { FooterComponent } from '../../Footer/footer/footer.component';

@Component({
  selector: 'app-ring',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './ring.component.html',
  styleUrl: './ring.component.css'
})
export class RingComponent {

}
