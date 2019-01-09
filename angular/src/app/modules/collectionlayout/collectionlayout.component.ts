import {Inject, ChangeDetectorRef,Component,ElementRef} from '@angular/core';
import { WindowRef } from '../../windowref';

@Component({
  selector: 'collection-layout',
  template: `
	<div *ngIf="this.collection">
		<ul >
			<li *ngFor="let item of collection.getAll().items">
				<a href="{{item.url}}">{{item.menutitle}}</a>
			</li>
		</ul>
		<button *ngIf="this.collection.has('first')" (click)="goToPage('first')">First</button>
		<button *ngIf="this.collection.has('previous')" (click)="goToPage('previous')">&lt;&lt; Previous</button>
		<button *ngIf="this.collection.has('next')" (click)="goToPage('next')">Next &gt;&gt;</button>
		<button *ngIf="this.collection.has('last')" (click)="goToPage('last')">Last</button>
	</div>
  `,
  styles: []
})

export class CollectionLayoutComponent {
	private context:object;
	private collection:any;
	Mura:any
	constructor(
		private hostElement: ElementRef,
		private changeDetectorRef: ChangeDetectorRef,
		@Inject(WindowRef) private windowRef: WindowRef
	){

		this.Mura=this.windowRef.nativeWindow.Mura
		this.context={};
		this.collection=false;

		//This is a dynamically added component that does not support Angular life cycle events
		setTimeout(
			()=>{
				this.updateContext();
				this.detectChanges();
			}
		);
	}

	goToPage(link){
		link=link || 'missing'
		if(this.collection && this.collection.has(link)){
			this.collection.get(link).then((collection)=>{
				this.collection=collection;
				this.detectChanges()
			})
		}
	}

	updateContext(){
		this.context=this.Mura(this.hostElement.nativeElement).closest('.mura-async-object').data();
	}

	detectChanges(){
		if(!this.collection){
			new this.Mura.UI.Collection(this.context).getCollection().then((collection)=>{
				this.collection=collection;
				this.changeDetectorRef.detectChanges();
			});
		} else {
			this.changeDetectorRef.detectChanges();
		}
	}

	ngOnInit() {

	}

}
