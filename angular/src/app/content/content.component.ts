import { Inject, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MuraService } from '../mura.service';
import { DefaultTemplateComponent } from './templates/default/default.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentComponent implements OnInit {

	public content={
		title:'',
		body:'',
		template:'',
		htmlheadqueue:'',
		htmlfootqueue:''
	};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
		private router:Router,
	  private muraService:MuraService) {

	}

  ngOnInit() {
		const Mura=this.muraService.getInstance();

		Mura.renderFilename(
			this.router.url.split('?')[0],
			this.muraService.getInstance().getQueryStringParams()
		).then(
			(rendered) => {
				this.content.title=rendered.get('title');

				Mura('.mura-region-container').each(
				(region)=>{
						region=Mura(region);
						region.html(
							rendered.renderDisplayRegion(region.data('region'))
						)
					}
				)

				Mura('#content-body').html(rendered.get('body'));
				Mura.init(rendered.get('config'));
				Mura('#html-queue').hide().html(rendered.get('htmlheadqueue') + rendered.get('htmlfootqueue')).show();
			}
		);

	}

}
