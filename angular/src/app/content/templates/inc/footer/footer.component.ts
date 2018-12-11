import { Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../../../mura.service';
import { ContentComponent } from '../../../content.component';

@Component({
  selector: 'footer-template',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ]
})
export class FooterComponent extends ContentComponent {


}
