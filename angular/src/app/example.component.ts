import {ChangeDetectorRef,Component,OnInit,ElementRef,Inject} from '@angular/core';

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

	constructor(private hostElement: ElementRef, private changeDetectorRef: ChangeDetectorRef,){
		this.updateContext();
	}

	updateContext(){
		setTimeout(
			()=>{
				this.context=Mura(this.hostElement.nativeElement).closest('.mura-async-object').data()
				this.changeDetectorRef.detectChanges();
			},
			1
		);
	}
	
	ngOnInit(){
		this.updateContext();
	}
}
