import {ChangeDetectorRef,Component,ElementRef} from '@angular/core';
//import { MuraService } from '../mura.service';

@Component({
  selector: 'example',
  template: `
  <h3>{{context.object}}</h3>
  `,
  styles: []
})

export class ExampleComponent {
	private context:object={object:"missing"};

	Mura:any;

	constructor(
		private hostElement: ElementRef,
		private changeDetectorRef: ChangeDetectorRef,
		//private muraService: MuraService
	){
		this.Mura=window.Mura;
		
		//This is a dynamically added component that does not support Angular life cycle events
		setTimeout(
			()=>{
				this.updateContext();
				this.detectChanges();
			}
		);
	}

	updateContext(){
		this.context=Mura(this.hostElement.nativeElement).closest('.mura-async-object').data()
	}

	detectChanges(){
		this.changeDetectorRef.detectChanges();
	}

}
