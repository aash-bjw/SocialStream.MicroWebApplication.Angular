import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  @Input()
  video: Video
  videoName: string

  constructor(private videoService: VideoService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.videoName = this.route.snapshot.paramMap.get('videoName')
    this.getVideo();
  }

 getVideo(){
  // const videoName = + this.route.snapshot.paramMap.get('videoName');
   this.videoService.getVideo(this.videoName).subscribe(video => this.video = video);
 }
}