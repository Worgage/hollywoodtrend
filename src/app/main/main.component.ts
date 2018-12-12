import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {Movie} from '../movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  article: Article = {
    id: '1',
    title: 'Lady Gaga vince tremilatordici oscar e 10 golden globes',
    subtext: 'Lady Germanotta sbanca tutto e porta a casa.',
    img_url: 'https://pmcvariety.files.wordpress.com/2018/09/a-star-is-born-3.jpg',
    points: 98,
    body: '      <p>\n' +
      '        During his Variety Actors on Actors conversation with Glenn Close,' +
      ' Sam Elliott dished on the first table read of &ldquo;A Star Is Born&rdquo; with Lady Gaga.\n' +
      '      </p>\n' +
      '\n' +
      '      <p>\n' +
      '        &ldquo;I&rsquo;ve loved her from afar,&rdquo; Elliott said. &ldquo;She was just kind of this regular girl on some level,' +
      ' this Stefani,&rdquo; he said. &ldquo;She was stunning to work with.&rdquo;\n' +
      '      </p>\n' +
      '\n' +
      '      <p>\n' +
      '        Elliott described a moment at the Greek Theater in Los Angeles after a long day and shooting in the hot sun. &ldquo;' +
      'It was all her Little Monsters, her fanbase that followed her religiously. They were the extras in the crowd,&rdquo; he said, ' +
      'remembering how morale had begun to dwindle as the sun went down and it got chillier.\n' +
      '      </p>\n' +
      '\n' +
      '      <p>\n' +
      '        <iframe width="560" height="315" src="https://www.youtube.com/embed/bo_efYhYU2A" frameborder="0" ' +
      'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
      '      </p>'
  };

  movie: Movie = {
  id: '2',
  title: 'Gone Girl',
  points: 89,
  date: new Date(),
  director: '',
  cast: [],
  categories: [],
  poster_url: 'http://people.bath.ac.uk/su9urb/img/article/f7b4b464.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
