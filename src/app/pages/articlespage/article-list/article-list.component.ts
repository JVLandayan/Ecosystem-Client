import { Component, OnInit } from '@angular/core';
import { articlelist } from 'src/app/models/articleslist.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['../articlespage.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }
  blogContent: articlelist[] = []
  pageNum = 1

  ngOnInit(): void {
    this.blogContent = this.articleService.blogContent
    }
}
