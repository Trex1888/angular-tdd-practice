import { HttpClientModule } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { Photo } from 'src/models/photo';
import { PhotoService } from '../services/photo.service';
import { PhotoComponent } from './photo.component';

let component: any;
const displayPhotos = async () => {
  component = await render(PhotoComponent, {
    declarations: [],
    imports: [HttpClientModule],
  });
};

describe('Photos', () => {
  const service = jest.spyOn(PhotoService.prototype, 'getPhotos');

  const photos: Photo[] = [
    {
      albumId: 5,
      id: 201,
      title: 'nesciunt dolorum consequatur ullam tempore accusamus debitis sit',
      url: 'https://via.placeholder.com/600/250289',
      thumbnailUrl: 'https://via.placeholder.com/150/250289',
    },
  ];

  it('called photoService', async () => {
    service.mockReturnValue(of([]));
    await displayPhotos();
    expect(service).toHaveBeenCalledWith('6');
  });

  it('should display items of photoService', async () => {
    service.mockReturnValue(of(photos));
    await displayPhotos();
    const actual = screen.getByText(
      'nesciunt dolorum consequatur ullam tempore accusamus debitis sit'
    );
    expect(actual).toBeTruthy();
  });
});
