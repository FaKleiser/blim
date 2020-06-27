import * as chalk from 'chalk';
import * as sharp from 'sharp';
import {performance} from 'perf_hooks';


const img: string = process.argv[2];
const start: number = performance.now();
sharp(img)
    .resize(1500, 800, {
        fit: 'cover',
        position: 'attention'
    })
    .toFile(img.replace(/\.([^.]+)$/, '-optimized.$1'), (err, info) => { 
        if (err) {
            console.log(chalk.red(`Blim failed: ${err}`));
        } else {
            console.log(chalk.green('Blim procesed'));
        }
        const end: number = performance.now();
        console.log(`Processing took ${Math.round(end-start)}ms.`);
    });