import * as nodeExternals from 'webpack-node-externals';
import * as sourceMapSupport from 'source-map-support';

import { app } from 'electron';
import AppWindows from '@/windows/AppWindows';

function initSourceMap(): void {
    if (process.env.NODE_ENV == 'development') {
        sourceMapSupport.install();
        console.log('ENV_LOG:', 'SOURCE MAP ENABLED');
    }
}

function initElectron(): void {
    const app = AppWindows.instance;
    app.createWindow();
}

async function main(): Promise<void> {
    initSourceMap();
    app.on('ready', initElectron);
}
main();
