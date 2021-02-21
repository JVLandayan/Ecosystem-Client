import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlelist } from 'src/app/models/articleslist.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  activeArticle :any

  constructor(private route:ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit(): void {
    const article = this.articleService.blogContent.find((data:articlelist)=>{
      return data.id == +this.route.snapshot.params['id']
      })
      this.activeArticle = article
    }

}
