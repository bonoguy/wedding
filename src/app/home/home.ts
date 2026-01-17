import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  schedule = [
    { time: '3:30 PM', title: 'Guests arrive' },
    { time: '4:00 PM', title: 'Ceremony' },
    { time: '4:30 PM', title: 'Cocktails' },
    { time: '6:00 PM', title: 'Dinner' },
    { time: '8:00 PM', title: 'First dance & party' },
  ];

  photoUrl = '../assets/images/2025-3.jpg'; // <- put your image here

  gallery = [
    
    
    { src: '../assets/images/us-3.jpg', alt: 'Kristin & Travis — engagement photo 1' },
    { src: '../assets/images/us-7.jpg', alt: 'Kristin & Travis — Engaged!' },
    { src: '../assets/images/us-4.jpg', alt: 'Kristin & Travis — engagement photo 2' },
    { src: '../assets/images/us-2.JPG', alt: 'Kristin & Travis — Cancun' },
    { src: '../assets/images/us-5.jpg', alt: 'Kristin & Travis — engagement photo 3' },
    { src: '../assets/images/us-14.jpg', alt: 'Kristin & Travis — Stairs at Cabin' },
    { src: '../assets/images/us-6.jpg', alt: 'Kristin & Travis — engagement photo 4' },
    { src: '../assets/images/us-11.jpg', alt: 'Kristin & Travis — Halloween' },
    { src: '../assets/images/us-12.jpg', alt: 'Kristin & Travis — Hammock Lounging' },
    { src: '../assets/images/us-13.jpg', alt: 'Kristin & Travis — At the Cabin' },
    { src: '../assets/images/us-15.jpg', alt: 'Kristin & Travis — Halloween 2' },
    { src: '../assets/images/us-17.jpg', alt: 'Kristin & Travis — Cabin Dock' },
    { src: '../assets/images/us-18.jpg', alt: 'Kristin & Travis — Our Home' },
    { src: '../assets/images/us-1.JPG', alt: 'Kristin & Travis — Space Mountain' },
  ];

  ourStory = {
    eyebrow: 'A little backstory',
    title: 'Our story',
    intro:
      "We’ll add a few paragraphs here — the fun parts, the meaningful parts, and how we ended up planning a weekend in Elk Ridge with our favorite people.",
    // Optional: split into sections if you want nicer layout
    highlights: [
      {
        heading: 'How we met',
        body: 'Write this part when you’re ready.',
      },
      {
        heading: 'The proposal',
        body: 'Write this part when you’re ready.',
      },
      {
        heading: 'Why Elk Ridge',
        body: 'Write this part when you’re ready.',
      },
    ],
  };

  rsvp = {
    email: 'kristinandtravis.wedding@gmail.com', // replace
    deadline: 'May 30',
    subject: 'RSVP — Kristin & Travis',
    body: `Hi Kristin & Travis,

We’re RSVP’ing for the following guest(s):

Names:
Attending: Yes / No
Allergies or dietary restrictions (if any):

Looking forward to celebrating with you!
`,
  };

  get rsvpMailto(): string {
    return (
      'mailto:' + this.rsvp.email +
      '?subject=' + encodeURIComponent(this.rsvp.subject) +
      '&body=' + encodeURIComponent(this.rsvp.body)
    );
  }

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  nextImage() {
    const i = this.lightboxIndex();
    this.lightboxIndex.set((i + 1) % this.gallery.length);
  }

  prevImage() {
    const i = this.lightboxIndex();
    this.lightboxIndex.set((i - 1 + this.gallery.length) % this.gallery.length);
  }

  // Keyboard support (ESC, arrows)
  onLightboxKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen()) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prevImage();
    }
  }
}
