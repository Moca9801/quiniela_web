import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/default/header/header.component';

@Component({
  selector: 'app-default',
  imports: [HeaderComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
