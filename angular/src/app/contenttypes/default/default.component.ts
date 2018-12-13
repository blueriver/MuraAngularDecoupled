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

	@Input() content:object;
	crumbNav:any;

	constructor( private muraService:MuraService) {

	}

	ngOnInit() {
		Mura('#content-body').html(	this.content.get('body'));

		this.content.get('crumbs')
		.then(collection=>{
			this.crumbNav=collection.getAll().items.reverse();
		});
	}

}
