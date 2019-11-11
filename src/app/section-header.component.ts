import { Component, Input} from '@angular/core';

@Component({
  selector: 'ec-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})

export class SectionHeaderComponent{
@Input() sectionHeader;

}