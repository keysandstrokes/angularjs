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
var core_1 = require('@angular/core');
var app_comments_service_1 = require('./app.comments.service');
var Message_1 = require('./Message');
var CommentsComponent = (function () {
    function CommentsComponent(_commentService) {
        this._commentService = _commentService;
        this.responseStatus = [];
    }
    CommentsComponent.prototype.submitPost = function () {
        var _this = this;
        console.log("submit Post click happend " + this.message.name);
        this._commentService.postComment(this.message).subscribe(function (data) { return console.log(_this.responseStatus = data); }, function (err) { return console.log(err); }, function () { return console.log('Request Complete'); });
        this.status = true;
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.message = new Message_1.Message();
        this.message.name = "keysandstokes";
        this.message.postId = 1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Message_1.Message)
    ], CommentsComponent.prototype, "message", void 0);
    CommentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-comment',
            templateUrl: 'posts.comment.html',
            providers: [app_comments_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [app_comments_service_1.CommentService])
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=app.posts.submit.component.js.map