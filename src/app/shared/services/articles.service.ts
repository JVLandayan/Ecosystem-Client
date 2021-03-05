import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { articlelist } from '../models/articleslist.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(public datepipe: DatePipe) {}

  latestDate: any;

  getDate() {
    this.latestDate = new Date();
    const latest_date = this.datepipe.transform(this.latestDate, 'yyyy-MM-dd');
    return latest_date;
  }

  //Dummy data
  private _blogContent: articlelist[] = [
    {
      id: 1,
      imgHead:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg/1920px-Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg',
      title: 'Title 1',
      date: this.getDate(),
      intro:
        '1 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 2,
      imgHead:
        'https://www.arabianbusiness.com/public/images/2019/05/29/Ferrari_SF90_Stradale_5.jpg',
      title: 'Title 2',
      date: this.getDate(),
      intro:
        '2 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 3,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 3',
      date: this.getDate(),
      intro:
        '3 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 4,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 4',
      date: this.getDate(),
      intro:
        '4 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 5,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 5',
      date: this.getDate(),
      intro:
        '5 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 7,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 7',
      date: this.getDate(),
      intro:
        '7 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 8,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 8',
      date: this.getDate(),
      intro:
        '8 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 9,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 9',
      date: this.getDate(),
      intro:
        '9 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 10,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 10',
      date: this.getDate(),
      intro:
        '10 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 11,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 11',
      date: this.getDate(),
      intro:
        '11 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 12,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 12',
      date: this.getDate(),
      intro:
        '12 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 13,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 13',
      date: this.getDate(),
      intro:
        '13 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 14,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 14',
      date: this.getDate(),
      intro:
        '14 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
    {
      id: 15,
      imgHead: 'assets/images/blog/blog-post-thumb-1.jpg',
      title: 'Title 15',
      date: this.getDate(),
      intro:
        '15 - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies... ',
    },
  ];

  get blogContent() {
    return this._blogContent; //Returns a copy of an array
  }
}
