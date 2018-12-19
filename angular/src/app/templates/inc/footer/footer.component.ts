import { Input, Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../../mura.service';
import { ContentComponent } from '../../../content/content.component';

@Component({
  selector: 'footer-template',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ]
})
export class FooterComponent {

	@Input() content:any;
	Mura:any

	constructor( private muraService:MuraService) {

	}

	ngOnInit() {
		this.Mura=this.muraService.getInstance();
	}
}
