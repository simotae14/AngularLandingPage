import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
  faqs: Array<object> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts(){
    this.apiService.getPosts().subscribe((data: Array<object>) => {
      this.faqs = data;
      console.log(data);
    });
  }

}
