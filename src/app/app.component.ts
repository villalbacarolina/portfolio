import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { SoftSkillsComponent } from "./soft-skills/soft-skills.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EducationComponent, ExperienceComponent, TechnologiesComponent, SoftSkillsComponent]
})
export class AppComponent {
  title = 'front-end';
}
