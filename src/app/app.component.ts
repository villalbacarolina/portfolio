import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from "./education/education.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EducationComponent]
})
export class AppComponent {
  title = 'front-end';
}
