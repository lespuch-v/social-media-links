import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CardComponent],
})
export class AppComponent {
  name = 'Jessica Randall';
  image =
    './assets/social-links-profile-main/assets/images/avatar-jessica.jpeg';
  location = 'London, United Kingdom';
  links = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];
  ocup = 'Front-end developer and avid reader.';
}
