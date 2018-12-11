
import { Injectable,Inject } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { MuraService } from './mura.service';

@Injectable()

export class ContentResolver implements Resolve<any> {

	constructor(
		@Inject(MuraService) private muraService,
		private router:Router) { }


	resolve(): Promise<any> {
		console.log(this.router.url)
			return this.muraService
				.renderFilename(
					this.router.url.split('?')[0],
					this.muraService.getInstance().getQueryStringParams()
				).then(
				(result) => {
					return result;
				}
			);
	}
}
