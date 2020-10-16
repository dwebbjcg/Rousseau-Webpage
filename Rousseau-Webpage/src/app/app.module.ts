import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectoryComponent } from './directory/directory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectoryComponent,
    AboutUsComponent,
    AudioPlayerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
