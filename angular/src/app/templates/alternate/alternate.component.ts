import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../mura.service';
import { HeaderComponent } from '../inc/header/header.component';
import { FooterComponent } from '../inc/footer/footer.component';

@Component({
  selector: 'alternate-template',
  templateUrl: './alternate.component.html',
  styleUrls: [ './alternate.component.css' ]
})
export class AlternateTemplateComponent  {
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

		this.Mura('#content-body').html(	this.content.get('body'));

		this.Mura.init(this.content.get('config'));

		this.Mura('#html-queue').hide().html(this.content.get('htmlheadqueue') + this.content.get('htmlfootqueue')).show();
	}
}
