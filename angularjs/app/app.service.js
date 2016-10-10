"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.posts_Url = 'https://jsonplaceholder.typicode.com/posts';
        this.http = _http;
    }
    PostService.prototype.getUserPosts = function () {
        //ensure imports are included
        //import { Http, Response } from '@angular/http';
        //import 'rxjs/add/operator/map';
        return this.http.get(this.posts_Url)
            .map(function (res) {
            return res.json();
        });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
exports.PostService = PostService;
//# sourceMappingURL=app.service.js.map