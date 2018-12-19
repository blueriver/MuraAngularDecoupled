import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../mura.service';
import { HeaderComponent } from '../inc/header/header.component';
import { FooterComponent } from '../inc/footer/footer.component';
import { DefaultContentTypeTemplateComponent } from '../../contenttypes/default/default.component';

@Component({
  selector: 'default-template',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.css' ]
})
export class DefaultTemplateComponent {

	@Input() content:any;
	Mura:any

	constructor( private muraService:MuraService) {

	}


	ngOnInit() {

		this.Mura=this.muraService.getInstance();

		this.Mura('.mura-region-container').each(
		(region)=>{
				region=this.Mura(region);
				region.html(
					this.content.renderDisplayRegion(region.data('region'))
				)
			}
		)

		this.Mura.init(this.content.get('config'));

		this.Mura('#html-queue').html(this.content.get('htmlheadqueue') + this.content.get('htmlfootqueue'));
	}

}
