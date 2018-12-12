import {ChangeDetectorRef,Component,ElementRef} from '@angular/core';
//import { MuraService } from '../mura.service';

@Component({
  selector: 'example',
  template: `
  <h3 *ngIf="context.myvar">{{context.myvar}}</h3>
	<h3 *ngIf="!context.myvar">Enter example variable in configurator</h3>
  `,
  styles: []
})

export class ExampleComponent {
	private context:object={myvar:"test"};

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
