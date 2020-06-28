import { Image } from "./Image";
import { ImageType } from "./ImageType.enum";

describe('Image', () => {
    it('should construct image from non-blim-original path', () => {
        const sut: Image = Image.fromAnypath('path/to/my.sample.jpg');
        expect(sut.optimizedPath).toBe('path/to/my.sample.jpg');
        expect(sut.origPath).toBe('path/to/my.sample.blim-orig.jpg');
    });

    it('should construct image from blim-original path', () => {
        const sut: Image = Image.fromAnypath('path/to/my.sample.blim-orig.jpg');
        expect(sut.optimizedPath).toBe('path/to/my.sample.jpg');
        expect(sut.origPath).toBe('path/to/my.sample.blim-orig.jpg');
    });

    it('should properly detect file extension', () => {
        const sut: Image = Image.fromAnypath('path/to.some/image.file.jpg');
        expect(sut.extension).toBe('jpg');
    });

    it('should properly detect image type based on extension', () => {
        expect(Image.fromAnypath('image.jpg').type).toBe(ImageType.JPEG);
        expect(Image.fromAnypath('image.JPG').type).toBe(ImageType.JPEG);
        expect(Image.fromAnypath('image.jpeg').type).toBe(ImageType.JPEG);
        expect(Image.fromAnypath('image.JPEG').type).toBe(ImageType.JPEG);

        expect(Image.fromAnypath('image.png').type).toBe(ImageType.PNG);
        expect(Image.fromAnypath('image.gif').type).toBe(ImageType.GIF);
        expect(Image.fromAnypath('image.webp').type).toBe(ImageType.WEBP);
        expect(Image.fromAnypath('image.svg').type).toBe(ImageType.SVG);
        expect(Image.fromAnypath('image.tiff').type).toBe(ImageType.TIFF);
    });

    it('should set any unknown file extensions to unknown image type', () => {
        expect(Image.fromAnypath('image.pdf').type).toBe(ImageType.UNKNOWN);
        expect(Image.fromAnypath('image.JEPG').type).toBe(ImageType.UNKNOWN);
    });
});