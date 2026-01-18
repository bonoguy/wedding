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
      answer: 'Dress up, but keep it comfortable for a summer evening. Think citrus-chic, pops of color are very welcome.'
    },
    {
      question: 'Are kids welcome?',
      answer: 'We love your kids dearly, but for this day we’re planning an adults-only celebration and appreciate you making arrangements.'
    },
    {
      question: 'Is there a registry?',
      answer: 'Your presence truly means the most to us. If you’d like to give a gift, a contribution toward our next chapter would be sincerely appreciated. If gift giving is your love language, you can check out our registry here.',
      linkText: 'View the registry',
      linkHref: 'https://example.com/registry',

    }
  ];

}
