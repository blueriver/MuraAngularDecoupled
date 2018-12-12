import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header-template',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

	@Input() content:object;
	primaryNav:any;

	constructor() {
		this.Mura=window.Mura;
	}

	ngOnInit(){
		this.Mura.getFeed('content')
		.where()
		.prop('parentid').isEQ('00000000000000000000000000000000001')
		.orProp('contentid').isEQ('00000000000000000000000000000000001')
		.includeHomepage(1)
		.sort('orderno')
		.getQuery()
		.then(collection=>{
			this.primaryNav=collection.getAll().items;
		});
	}
}
