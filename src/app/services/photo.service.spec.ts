import { Photo } from 'src/models/photo';
import { PhotoService } from './photo.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PhotoService', () => {
  let injector: TestBed;
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService],
    });
    injector = getTestBed();
    service = injector.get(PhotoService);
    httpMock = injector.get(HttpTestingController);
  });

  it('renders object with mock data', async () => {
    const photos: Photo[] = [
      {
        albumId: 5,
        id: 201,
        title:
          'nesciunt dolorum consequatur ullam tempore accusamus debitis sit',
        url: 'https://via.placeholder.com/600/250289',
        thumbnailUrl: 'https://via.placeholder.com/150/250289',
      },
    ];

    service.getPhotos('5').subscribe((sub) => {
      expect(sub).toEqual(photos);
    });
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/photos?albumId=5'
    );
    expect(req.request.method).toBe('GET');
    req.flush(photos);
  });
});
