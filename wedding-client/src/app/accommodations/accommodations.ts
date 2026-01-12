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
    intro: [
      'Elk Ridge is a resort community near Waskesiu in Prince Albert National Park — quiet, wooded, and beautiful in the summer.',
      ''
    ],
      
    bullets: [
      { label: 'Vibe', value: 'Relaxed, lakes-and-forest weekend' },
      { label: 'Closest hub', value: 'Waskesiu Lake (shops, restaurants, lakefront)' },
      { label: 'Drive notes', value: 'Expect limited cell service in spots and slower night driving' },
      { label: 'Arrival tip', value: 'If you’re arriving late, grab essentials before heading in' },
    ],
    note:
      'We’ll add exact venue directions + parking info closer to the date.',
  };

  cabinOptions = [
    {
      name: 'Elk Ridge Resort (on-site)',
      area: 'Elk Ridge',
      distance: '0–5 min',
      details: [
        'Easiest option — walk/short drive to everything',
        'Mix of hotel-style rooms and resort accommodations',
        'Great if you want maximum convenience',
      ],
      linkText: 'Add booking link',
      linkHref: '', // fill in
    },
    {
      name: 'Waskesiu Lake cabins',
      area: 'Waskesiu / PANP',
      distance: '15–25 min',
      details: [
        'Closest “town” feel — lake, restaurants, rentals',
        'A great option for families / longer stays',
        'Book early (summer fills fast)',
      ],
      linkText: 'Add booking link',
      linkHref: '', // fill in
    },
    {
      name: 'Airbnb / private cabins nearby',
      area: 'Lakeland area',
      distance: '10–45 min',
      details: [
        'Best for groups splitting costs',
        'Look for: number of beds, parking, and check-in flexibility',
        'We’ll add a short list of favorites here',
      ],
      linkText: 'Add a list link',
      linkHref: '', // fill in
    },
  ];

}
