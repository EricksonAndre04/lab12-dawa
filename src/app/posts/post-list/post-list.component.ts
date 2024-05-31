import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Libros', content: 'Content of Post One' },
    { id: 2, title: 'Revistas Cientificas', content: 'Content of Post Two' },
    { id: 3, title: 'Revistas Tecnologicas', content: 'Content of Post Three' }
  ];

  constructor(private router: Router) {}

  showDetails(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }
}

