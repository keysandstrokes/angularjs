import { Component, OnInit } from '@angular/core';
import { PostService } from './app.service'
@Component({
    moduleId: module.id,
    selector: 'app-posts',
    templateUrl: 'posts.component.html',
    providers: [PostService]
})
export class PostComponent implements OnInit {

    constructor(private _postService: PostService) { }

    posts:Object = [];

    ngOnInit() {
        this.getPosts();
     }
    
    getPosts()
    {
        this._postService.getUserPosts()
            .subscribe(arg => this.posts = arg);
        
    };
}

