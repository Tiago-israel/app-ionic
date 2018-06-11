import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

    private readonly key: string = "config";

    private config = {
        showIntro: true
    };

    public getConfig(): any {
        return JSON.parse(localStorage.getItem(this.key));
    }

    public setConfig(showIntro: boolean): void {
        this.config.showIntro = showIntro;
        localStorage.setItem(this.key, JSON.stringify(this.config));
    }
}