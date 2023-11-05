import { Component } from '@angular/core';

@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.css']
})
export class MainFilterComponent {
  MainFilter = [
    {
    title:"მომსახურების ტიპი",
    },
    {title:"მომსახურების ტიპი"},
    {title:"მომსახურების ტიპი"},

  ]
  category: string[] = ['category1', 'category2', 'category3', 'category4']
}
