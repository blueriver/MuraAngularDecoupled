import {Inject, ChangeDetectorRef,Component,ElementRef} from '@angular/core';
import { WindowRef } from '../../windowref';

@Component({
  selector: 'example',
  template: `
  <h3 *ngIf="context.myvar">{{context.myvar}}</h3>
	<h3 *ngIf="!context.myvar">Enter example variable in configurator</h3>
  `,
  styles: []
})

export class ExampleComponent {
	private context:object={myvar:""};
	Mura:any
	constructor(
		private hostElement: ElementRef,
		private changeDetectorRef: ChangeDetectorRef,
		@Inject(WindowRef) private windowRef: WindowRef
	){

		this.Mura=this.windowRef.nativeWindow.Mura

		//This is a dynamically added component that does not support Angular life cycle events
		setTimeout(
			()=>{
				this.updateContext();
				this.detectChanges();
			}
		);
	}

	updateContext(){
		this.context=this.Mura(this.hostElement.nativeElement).closest('.mura-async-object').data()
	}

	detectChanges(){
		this.changeDetectorRef.detectChanges();
	}

	ngOnInit() {
		
	}

}
