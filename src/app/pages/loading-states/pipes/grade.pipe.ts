import { Pipe, PipeTransform } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';

@Pipe({ name: 'grade' })
export class GradePipe implements PipeTransform {
    transform(value: number): string {
        if (value < 80) {
            return BLUIColors.red[500];
        }
        if (value < 90) {
            return BLUIColors.yellow[500];
        }
        return BLUIColors.green[500];
    }
}
