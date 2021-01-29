import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg',
})
export class NoimgPipe implements PipeTransform {
  transform(img: any[]): string {
    if (!img) {
      return 'assets/img/no-img.jpg';
    }

    if (img.length > 0) {
      return img[0].url;
    } else {
      return 'assets/img/no-img.jpg';
    }
  }
}
