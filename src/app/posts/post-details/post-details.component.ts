import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    const posts = [
      { id: 1, title: 'Libros', content: 'Cien años de soledad de Gabriel García Márquez, 1984 de George Orwell, El Quijote de Miguel de Cervantes' },
      { id: 2, title: 'Revistas Científicas', content: 'Nature, Science, The Lancet' },
      { id: 3, title: 'Revistas Tecnológicas', content: 'Wired, MIT Technology Review, IEEE Spectrum' }
    ];
    this.post = posts.find(p => p.id === postId);
  }
}


