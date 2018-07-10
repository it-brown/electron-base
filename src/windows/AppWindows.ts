import { BrowserWindow,  webContents, MenuItemConstructorOptions } from 'electron';
import Windows from '@/windows/Windows'
import loadUrls from '@/env/loadUrls';

export default class AppWindows extends Windows {
    public loadUrls = loadUrls;

    protected createMenu(): MenuItemConstructorOptions[] {
        return [
            {
                label: 'File',
                submenu:[
                    { type: 'separator' },
                    { role: 'quit' }
                ]
            }
        ];
    }
}
