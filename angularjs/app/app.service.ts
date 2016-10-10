import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {
    http: Http;
    posts_Url: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(public _http: Http) {
      this.http = _http;
    }
    getUserPosts() {
       //ensure imports are included
        //import { Http, Response } from '@angular/http';
        //import 'rxjs/add/operator/map';
        return this.http.get(this.posts_Url)
            .map((res: Response) => {
                return res.json();
            });         
    }
 }



		