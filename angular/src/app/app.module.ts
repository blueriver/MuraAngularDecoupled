import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {ContentComponent} from './content/content.component';
import {MuraService} from './mura.service';
import {DefaultTemplateComponent} from './content/templates/default/default.component';
import {FooterComponent} from './content/templates/inc/footer/footer.component';
import {HeaderComponent} from './content/templates/inc/header/header.component';
import {SafePipe} from './pipes/safe.pipe';

import {ExampleComponent} from './example.component';
import {DomService} from './dom.service';
import {ContentResolver} from './content.resolver';

@NgModule({
  declarations: [
    AppComponent,
		ContentComponent,
		DefaultTemplateComponent,
		HeaderComponent,
		FooterComponent,
		ExampleComponent,
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
  providers: [MuraService,DomService,ContentResolver],
  bootstrap: [AppComponent],
	entryComponents:[ExampleComponent]
})
export class AppModule { }
