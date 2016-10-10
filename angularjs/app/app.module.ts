import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PostService } from './app.service'
import { PostComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [PostComponent],
    providers: [PostService],
    bootstrap: [PostComponent],
})
export class AppModule { }
