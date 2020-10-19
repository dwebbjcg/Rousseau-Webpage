import { Component, OnInit } from "@angular/core";
// import { Track } from 'ngx-audio-player';

// const msaapDisplayTitle = true;
// const msaapDisplayPlayList = true;
// const msaapPageSizeOptions = [2,4,6];
// const msaapDisplayVolumeControls = true;
// const msaapDisablePositionSlider = true;

// // Material Style Advance Audio Player Playlist
// msaapPlaylist: Track[] = [
//   {
//     title: 'Audio One Title',
//     link: 'Link to Audio One URL'
//   },
//   {
//     title: 'Audio Two Title',
//     link: 'Link to Audio Two URL'
//   },
//   {
//     title: 'Audio Three Title',
//     link: 'Link to Audio Three URL'
//   },
// ];

@Component({
  selector: "app-audio-player",
  templateUrl: "./audio-player.component.html",
  styleUrls: ["./audio-player.component.css"],
})
export class AudioPlayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
