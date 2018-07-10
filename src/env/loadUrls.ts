import { app } from 'electron';
import * as url from 'url';
import * as path from 'path';

const loadUrls = {
    'development': url.format({
        pathname: 'localhost:8000',
        protocol: 'http:',
        slashes: true
    }),

    'production': url.format({
        pathname: path.resolve(app.getAppPath(), 'public/index.html'),
        protocol: 'file:',
        slashes: true
    })
}

export default loadUrls;
