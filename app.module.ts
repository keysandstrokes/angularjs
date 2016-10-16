import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PostService } from './app.service'
import { PostComponent } from './app.component';
import { CommentsComponent } from "./comments/app.posts.submit.component";

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
    ],
    declarations: [PostComponent,CommentsComponent],
    providers: [PostService],
    bootstrap: [PostComponent,CommentsComponent],
})
export class AppModule { }
