import { Component, OnInit,Input } from '@angular/core';
import { CommentService } from './app.comments.service'
import { Message } from './Message'
@Component({
    moduleId: module.id,
    selector: 'post-comment',
    templateUrl: 'posts.comment.html',
    providers: [CommentService]
})
export class CommentsComponent implements OnInit {

    constructor(private _commentService: CommentService) { }
 
    @Input() message:Message;
    responseStatus:Object= [];
    status:boolean ;
  
    submitPost()
    {        
        console.log("submit Post click happend " + this.message.name)
        this._commentService.postComment(this.message).subscribe(
           data => console.log(this.responseStatus = data),
           err => console.log(err),
           () => console.log('Request Complete')
        ); 
        this.status = true;       
    }
    ngOnInit() {     
       this.message = new Message();
       this.message.name = "keysandstokes";
       this.message.postId=1;
    } 

}


