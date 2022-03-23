import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  url: string = 'https://jsonplaceholder.typicode.com/photos?albumId=';
  helloUrl: string = 'https://jsonplaceholder.typicode.com/photos?albumId=5';
  other: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient,
    private client: HttpClient,
    private hello: HttpClient
  ) {}

  getPhotos(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}${albumId}`);
  }

  getHello(): Observable<Photo[]> {
    return this.hello.get<Photo[]>(this.helloUrl);
  }

  getPics(): Observable<Photo[]> {
    return this.client.get<Photo[]>(this.other);
  }
}
