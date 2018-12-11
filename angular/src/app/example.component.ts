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
	name:string="";

	private context:object={object:"missing"};

	constructor(private hostElement: ElementRef, private changeDetectorRef: ChangeDetectorRef,){
		setTimeout(
			()=>{
				this.context=Mura(this.hostElement.nativeElement).closest('.mura-async-object').data()
				this.changeDetectorRef.detectChanges();
			},
			1
		);

	}

	ngOnInit(){
		this.context=Mura(this.hostElement.nativeElement).closest('.mura-async-object').data();
	}
}
