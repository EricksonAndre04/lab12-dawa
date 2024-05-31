import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const userId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' }
    ];
    this.user = users.find(u => u.id === userId);
    
    if (!this.user) {
      this.router.navigate(['/not-found']);
    }
  }
}



