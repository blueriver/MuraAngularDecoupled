import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../../mura.service';

@Component({
  selector: 'header-template',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

	@Input() content:any;
	primaryNav:any;
	Mura:any

	constructor( private muraService:MuraService) {

	}

	ngOnInit(){

		this.Mura=this.muraService.getInstance();

		this.Mura.getFeed('content')
		.where()
		.prop('parentid').isEQ('00000000000000000000000000000000001')
		.sort('orderno')
		.getQuery()
		.then(collection=>{
			let tempArray=collection.getAll().items;
			tempArray.unshift({url:"/",menutitle:"Home"});
			this.primaryNav=tempArray;
		});
	}
}
