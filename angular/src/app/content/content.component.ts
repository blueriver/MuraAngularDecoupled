import { Input, Inject, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MuraService } from '../mura.service';
import { DefaultTemplateComponent } from '../templates/default/default.component';
import { AlternateTemplateComponent } from '../templates/alternate/alternate.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentComponent implements OnInit {

	content:any
	Mura:any

  constructor(
    private route: ActivatedRoute,
    private location: Location,
		private router:Router,
	  private muraService:MuraService) {

	}

  ngOnInit() {
		this.Mura=this.muraService.getInstance();

		this.Mura.renderFilename(
			this.router.url.split('?')[0],
			this.muraService.getInstance().getQueryStringParams()
		).then(
			(rendered) => {
				this.content=rendered;
			}
		);

	}

}
