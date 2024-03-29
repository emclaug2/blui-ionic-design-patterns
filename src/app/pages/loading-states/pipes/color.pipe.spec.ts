import { TestBed } from '@angular/core/testing';
import * as BLUIColors from '@brightlayer-ui/colors';
import { ColorPipe } from './color.pipe';

describe('ColorPipe', () => {
    let pipe: ColorPipe;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        pipe = new ColorPipe();
    });

    it('should be created', () => {
        void expect(pipe).toBeTruthy();
    });

    it('should return red if the value is less than 25', () => {
        void expect(pipe.transform(24)).toEqual(BLUIColors.red[500]);
        void expect(pipe.transform(25)).not.toEqual(BLUIColors.red[500]);
    });
});
