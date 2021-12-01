import { Pipe, PipeTransform } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 25) {
            return BLUIColors.red[500];
        }
        if (value < 70) {
            return BLUIColors.yellow[500];
        }
        return BLUIColors.green[500];
    }
}
