import {provide, enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import {Layout} from './domain/layout/layout.component';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

enableProdMode();
bootstrap(
    Layout,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' }), provide(LocationStrategy, { useClass: HashLocationStrategy })]
    ); 