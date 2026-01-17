import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  imports: [],
  templateUrl: './accommodations.html',
  styleUrl: './accommodations.scss',
})
export class Accommodations {

  elkRidgeInfo = {
    eyebrow: 'Staying in the area',
    title: 'About Elk Ridge',
    intro: 'Elk Ridge is a resort community near Waskesiu in Prince Albert National Park — quiet, wooded, and beautiful in the summer.',
  };

  roomBlock = {
    code: 197033,
    deadline: 'March 26, 2026'
  }

  cabinOptions = [
    {
      name: 'Camping',
      area: 'Elk Ridge',
      distance: '0–40 min',
      details: [
        'Prince Albert National Park',
        'Greate Blue Heron Provincal Park (Emma/Anglin Lake)',
        'Christoper Lake'
      ]
    },
    {
      name: 'Waskesiu Lake cabins',
      area: 'Waskesiu / PANP',
      distance: '15–25 min',
      details: [
        'Closest “town” feel — lake, restaurants, rentals',
        'A great option for families / longer stays',
        'Book early (summer fills fast)',
      ]
    },
    {
      name: 'Airbnb / private cabins nearby',
      area: 'Lakeland area',
      distance: '10–45 min',
      details: [
        'Best for groups splitting costs',
        'Lots of options available',
      ]
    },
  ];

}
