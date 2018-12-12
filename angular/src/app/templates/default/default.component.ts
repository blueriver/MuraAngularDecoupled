import { Input Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../mura.service';
import { HeaderComponent } from '../inc/header/header.component';
import { FooterComponent } from '../inc/footer/footer.component';

@Component({
  selector: 'default-template',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.css' ]
})
export class DefaultTemplateComponent {

	@Input() content:object;

	constructor( private muraService:MuraService) {

	}


	ngOnInit() {

		const Mura=this.muraService.getInstance();

		Mura('.mura-region-container').each(
		(region)=>{
				region=Mura(region);
				region.html(
					this.content.renderDisplayRegion(region.data('region'))
				)
			}
		)

		Mura('#content-body').html(	this.content.get('body'));
		Mura.init(this.content.get('config'));
		Mura('#html-queue').hide().html(this.content.get('htmlheadqueue') + this.content.get('htmlfootqueue')).show();
	}

}
