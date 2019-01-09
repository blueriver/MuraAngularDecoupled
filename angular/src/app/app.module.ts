import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {ContentComponent} from './content/content.component';
import {MuraService} from './mura.service';
import {DefaultTemplateComponent} from './templates/default/default.component';
import {AlternateTemplateComponent} from './templates/alternate/alternate.component';
import {DefaultContentTypeTemplateComponent} from './contenttypes/default/default.component';
import {FooterComponent} from './templates/inc/footer/footer.component';
import {HeaderComponent} from './templates/inc/header/header.component';
import {SafePipe} from './pipes/safe.pipe';
import {CollectionLayoutComponent} from './modules/collectionlayout/collectionlayout.component';
import {ExampleComponent} from './modules/example/example.component';
import {DomService} from './dom.service';
import { WindowRef } from './windowref';

@NgModule({
  declarations: [
    AppComponent,
		ContentComponent,
		DefaultTemplateComponent,
		AlternateTemplateComponent,
		DefaultContentTypeTemplateComponent,
		HeaderComponent,
		FooterComponent,
		ExampleComponent,
		CollectionLayoutComponent,
		SafePipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'mura-angular'}),
    RouterModule.forRoot([
			{ path: '**',
				component:ContentComponent
			}
    ]),
    TransferHttpCacheModule
  ],
  providers: [MuraService,DomService,WindowRef],
  bootstrap: [AppComponent],
	entryComponents:[ExampleComponent,CollectionLayoutComponent]
})
export class AppModule { }
