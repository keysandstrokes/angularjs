import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import { Message } from './Message'
@Injectable()
export class CommentService {
    http: Http;
    returnCommentStatus:Object = [];
    posts_Url: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(public _http: Http) {
       this.http = _http;
    }
    postComment(message:Message) {
       //ensure imports are included
        //import { Http, Response } from '@angular/http';
        //import 'rxjs/add/operator/map';
    
       return this.http.post(this.posts_Url, message, { 
        })
       .map(res =>  res.json());
        
        	    
    }
 }



		