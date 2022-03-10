import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() images: string[] = [];
  currentImageSource: string = "../assets/images/cover/batman.jpg";
  currentImageIndex: number = 0;

  getNextMovieImage() : void {
    if(this.currentImageIndex === this.images.length - 1)
      return;

    ++this.currentImageIndex;
    this.currentImageSource = this.images[this.currentImageIndex];
  }

  getPreviousMovieImage() : void {
    if(this.currentImageIndex === 0)
      return;

    --this.currentImageIndex;
    this.currentImageSource = this.images[this.currentImageIndex];
  }
}
