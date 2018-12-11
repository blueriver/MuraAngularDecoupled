import { Inject, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MuraService } from '../../../mura.service';
import { ContentComponent } from '../../content.component';
import { HeaderComponent } from '../inc/header/header.component';
import { FooterComponent } from '../inc/footer/footer.component';

@Component({
  selector: 'default-template',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.css' ]
})
export class DefaultTemplateComponent {


}
