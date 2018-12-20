import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../mura.service';


@Component({
  selector: 'default-contenttype-template',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.css' ]
})

export class DefaultContentTypeTemplateComponent {

	@Input() content:any;
	crumbNav:any;
	Mura:any

	constructor( private muraService:MuraService) {

	}

	ngOnInit() {
		this.Mura=this.muraService.getInstance();

		this.Mura('#content-body').html(	this.content.get('body'));

		this.Mura('.mura-region-container').each(
		(region)=>{
				region=this.Mura(region);
				region.html(
					this.content.renderDisplayRegion(region.data('region'))
				)
			}
		)
		
		this.content.get('crumbs')
		.then(collection=>{
			this.crumbNav=collection.getAll().items.reverse();
		});
	}

}
