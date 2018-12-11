import {ChangeDetectorRef,Component,ElementRef} from '@angular/core';

import Mura from  'mura.js'

@Component({
  selector: 'example',
  template: `
  <h3>{{context.object}}</h3>
  `,
  styles: []
})
export class ExampleComponent {
	private context:object={object:"missing"};

	constructor(private hostElement: ElementRef, private changeDetectorRef: ChangeDetectorRef){
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
