import * as path from 'path';
import * as fs from 'fs';
import { ImageType } from './ImageType.enum';

/**
 * Represents an image file path.
 */
export class Image {

    private static BLIM_ORIG_PATH_EXTENSION: string = 'blim-orig';
    private static ORIG_PATH_REGEX: RegExp = new RegExp(`(\.${Image.BLIM_ORIG_PATH_EXTENSION})\.(jpg|jpeg|png|webp|gif|svg|tiff)$`, 'i');

    public optimizedPath: string;
    public origPath: string;

    private constructor(optimizedPath: string, origPath: string) {
        this.optimizedPath = optimizedPath;
        this.origPath = origPath;
    }

    public static fromAnypath(anypath: string): Image {
        if (Image.ORIG_PATH_REGEX.test(anypath)) {
            const optimizedPath = anypath.replace(Image.ORIG_PATH_REGEX, '.$2');
            return new Image(optimizedPath, anypath);
        } else {
            const origPath = anypath.replace(/\.(jpg|jpeg|png|webp|gif|svg|tiff)/i, `.${Image.BLIM_ORIG_PATH_EXTENSION}.$1`);
            return new Image(anypath, origPath);
        }
    }

    public get name(): string {
        return path.basename(this.optimizedPath);
    }

    public get type(): ImageType {
        switch (this.extension.toLowerCase()) {
            case 'jpg':
            case 'jpeg':
                return ImageType.JPEG;
            case 'png':
                return ImageType.PNG;
            case 'webp':
                return ImageType.WEBP;
            case 'gif':
                return ImageType.GIF;
            case 'svg':
                return ImageType.SVG;
            case 'tiff':
                return ImageType.TIFF;
            default:
                return ImageType.UNKNOWN;
        }
    }

    /**
     * Returns the image file extension without leading dot.
     * 
     * Example: jpg
     */
    public get extension(): string {
        return path.extname(this.optimizedPath)
            .replace(/^\./, '');
    }
}