System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/router', './domain/layout/layout.component', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, router_1, layout_component_1, common_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (layout_component_1_1) {
                layout_component_1 = layout_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(layout_component_1.Layout, [router_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }), core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);
        }
    }
});
