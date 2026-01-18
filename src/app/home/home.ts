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
    { src: '../assets/images/us-19.jpg', alt: 'Kristin & Travis — Kite Festival' },
    { src: '../assets/images/us-20.jpg', alt: 'Kristin & Travis — Our first photo' },
  ];

  ourStory = {
    eyebrow: 'The little moments that led us here',
    title: 'Our story',
    intro:
      "Our story has been shaped by the places we’ve gone, the home we’ve built, and the quiet moments in between. This is how we found our way here.",
    highlights: [
      {
        heading: 'How it started',
        body: [
          'Our first date took place on a cold January evening. At the time, it was meant to be a one-time thing—Kristin was planning to move back to Nicaragua, after all. When those plans fell through, one date quickly turned into many, and we found ourselves spending more and more time together.',
          'That first year was full of adventure. We squeezed in road trips, festivals, and memories that still make us smile—like the Swift Current Kite Festival, Halloween in Medicine Hat, and even a month-long stay in Nicaragua that confirmed what we were already starting to feel: this was something special.',
        ]
      },
      {
        heading: 'Our Life Now',
        body: [
          'In 2024, we took a big step and became homeowners, buying our first house together. Since then, we’ve loved slowly turning it into a place that feels like us—tackling small renovations, learning as we go, and creating a home we’re proud of.',
          'We’ve also kept our love of travel alive, adding new memories along the way with trips to places like Cancun and Nova Scotia. Whether we’re at home or away, the best part has always been doing it together.'
        ]
      },
      {
        heading: 'The Engagement',
        body: [
          'During a special Easter week getaway at Christopher Lake, Kristin had no idea what was coming. The evening began like so many others—good conversation, a crackling fire, and the calm of being surrounded by nature.',
          'Under the northern lights, on the dock, at our favourite place, Travis got down on one knee. Kristin said yes—and just like that, a new chapter began.'
        ]
      },
      {
        heading: 'Why Elk Ridge',
        body: [
          'The Eliason family cabin at Christopher Lake quickly became a place that meant a lot to us—a destination for quiet moments, fun with friends and family, and some of our favorite memories together. When it came time to choose a wedding location, Elk Ridge felt like an easy choice.',
          'Choosing this location gives us the chance to share a place we love deeply and celebrate surrounded by the northern forest that holds such a special place in our hearts.'
        ]
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
