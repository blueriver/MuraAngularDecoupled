import { Inject, Injectable, Optional } from '@angular/core';
import { DomService } from './dom.service';
import { ExampleComponent } from './modules/example/example.component';
import { CollectionLayoutComponent } from './modules/collectionlayout/collectionlayout.component';
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

		Mura.UI.Angular=Mura.UI.extend(
			{
				component:'',
				renderClient:function(){
					domServiceRef.appendComponent(this.context.targetEl,this.component);
					this.trigger('afterRender');
				}
			});

		Mura.Module.Example=Mura.UI.Angular.extend({
				component:ExampleComponent
			});

		Mura.Module.NgCollectionLayout=Mura.UI.Angular.extend({
				component:CollectionLayoutComponent
			});

	}

	getInstance(){
		return this.mura;
	}

}
