import sharp from 'sharp';
import { Image } from '../model/Image';
import { OptimizerOptions } from './OptimizerOptions';
import * as fs from 'fs';
import { FitEnum } from 'sharp';
import {performance} from 'perf_hooks'

export class BlimOptimizer {
    public optimize(image: Image, options: OptimizerOptions): Promise<sharp.OutputInfo> {
        const start: number = performance.now();
        this.ensureOrigExists(image);
        
        return sharp(image.origPath)
            .resize(options.width, options.height, {
                fit: (options.fit as keyof FitEnum) || 'cover',
                position: options.position || 'attention'
            })
            .toFile(image.optimizedPath);
    }

    private ensureOrigExists(image: Image) {
        if (!fs.existsSync(image.origPath)) {
            fs.copyFileSync(image.optimizedPath, image.origPath);
        }
    }
}

