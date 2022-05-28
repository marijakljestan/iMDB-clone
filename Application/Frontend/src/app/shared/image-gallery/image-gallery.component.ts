import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit{
  @Input() images: string[] = [];
  currentImageSource: string = "https://cinematic-images.s3.amazonaws.com/Batman/Batman1.jpg";
  currentImageIndex: number = 0;

  ngOnInit() : void {
    if(this.images)
      this.currentImageSource = this.images[0];
  }

  getNextMovieImage() : void {
    if(this.currentImageIndex === this.images.length - 1){
      this.currentImageIndex = 0;
      this.currentImageSource = this.images[this.currentImageIndex];
      return;
    }
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
