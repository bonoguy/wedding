import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  schedule = [
    { time: '3:30 PM', title: 'Guests arrive' },
    { time: '4:00 PM', title: 'Ceremony' },
    { time: '4:30 PM', title: 'Cocktails & photos' },
    { time: '6:00 PM', title: 'Dinner' },
    { time: '8:00 PM', title: 'First dance & party' },
  ];

  photoUrl = '../assets/images/2025-1.jpg'; // <- put your image here

  gallery = [
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 1' },
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 2' },
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 3' },
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 4' },
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 5' },
    { src: '../assets/images/2025-1.jpg', alt: 'Kristin & Travis — engagement photo 6' },
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
