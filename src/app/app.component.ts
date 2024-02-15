import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { BottomComponent } from './bottom/bottom.component';
import { ContainersComponent } from './containers/containers.component';

import { GithubLinkComponent } from './github-link/github-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,BottomComponent,GithubLinkComponent,ContainersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNewApp';
} 
