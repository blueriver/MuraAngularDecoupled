import { Inject, Injectable, Optional } from '@angular/core';
import { DomService } from './dom.service';
import { ExampleComponent } from './modules/example/example.component';

import Mura from 'mura.js';

@Injectable()

export class MuraService {
	private mura=Mura;
	private renderedContent:any;

	constructor(@Inject(DomService) private domService) {

		Mura.init({
				rootpath:"http://localhost:8888",
				siteid:"default",
				queueObjects:false,
				processMarkup:false
			});

		Mura.loader()
			.loadcss(Mura.corepath + '/modules/v1/core_assets/css/mura.7.1.min.css')
			.loadcss(Mura.corepath + '/modules/v1/core_assets/css/mura.7.1.skin.css');

		const domServiceRef=this.domService;

		Mura.Module.Example=Mura.UI.extend(
			{
				render:function(){
					domServiceRef.appendComponent(this.context.targetEl,ExampleComponent);
					this.trigger('afterRender');
				}
			});

	}

	getInstance(){
		return this.mura;
	}

	getRenderedContent(){
		return this.renderedContent;
	}


	renderFilename(filename,params){
		return this.mura.renderFilename(filename,params).then(
			(rendered)=>{
				this.renderedContent=rendered;
				return this.getRenderedContent();
			}
		);
	}
}
