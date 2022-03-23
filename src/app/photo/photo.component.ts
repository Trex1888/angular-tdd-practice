import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from 'src/models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  loadPhotos: Photo[] = [];

  constructor(private api: PhotoService) {}

  ngOnInit(): void {
    this.getAllPhotos();
    this.getAllHellos();
    this.getAllPics();
  }

  getAllPhotos() {
    this.api.getPhotos('6').subscribe((photos) => {
      this.loadPhotos = photos;
    });
  }

  getAllHellos() {
    this.api.getHello().subscribe((hello) => {
      // console.log(hello);
    });
  }

  getAllPics() {
    this.api.getPics().subscribe((pics) => {
      // console.log(pics);
    });
  }
}
