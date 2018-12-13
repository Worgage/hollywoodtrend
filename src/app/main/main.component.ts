import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  article: Article = {
    id: 1,
    movie_id: 1,
    date: new Date(),
    title: 'A Star is Born ',
    subtext: 'Lady Germanotta sbanca tutto e porta a casa.',
    img_url: 'https://pad.mymovies.it/filmclub/2015/03/216/locandinapg1.jpg',
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

  constructor() { }

  ngOnInit() {
  }

}
