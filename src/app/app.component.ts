import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Calm Lake',
      imageUrl: 'assets/lake.jpg',
      username: 'tourist1234',
      content: 'What a wonderful lake!'
    },
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Captivating Sunset',
      imageUrl: 'assets/sunset.jpg',
      username: 'sunwalker',
      content: 'The best view ever'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today'
    },
    {
      title: 'Yellow Flower',
      imageUrl: 'assets/flower.jpg',
      username: 'gardener777',
      content: 'What a wonderful lake!'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    }
  ];
}
