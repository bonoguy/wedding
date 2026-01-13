import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {
  faq = [
    { 
      question: 'What should I wear?',
      answer: 'Dress up, but keep it comfortable for a summer evening. If you’d like, citrus-inspired pops of color are very welcome.' 
    },
    { 
      question: 'Are kids welcome?', 
      answer: 'We love your kids dearly, but for this day we’re planning an adults-only celebration and appreciate you making arrangements.' 
    },
    { 
      question: 'Is there a registry?', 
      answer: 'Your presence truly means the most to us. If you’d like to give a gift, a contribution toward our next chapter would be sincerely appreciated. For those who prefer a physical gift, we’ve also put together a small registry here.',
       linkText: 'View the registry',
    linkHref: 'https://example.com/registry',

    }
  ];

}
