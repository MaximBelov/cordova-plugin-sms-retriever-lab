import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@awesome-cordova-plugins/splash-screen/ngx';
import {StatusBar} from '@awesome-cordova-plugins/status-bar/ngx';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { SmsRetrieverAz } from 'awesome-cordova-plugins-sms-retriever-az/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        SmsRetrieverAz,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
