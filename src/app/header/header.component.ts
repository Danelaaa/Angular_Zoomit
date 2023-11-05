import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menuBtn') menuBtn: ElementRef | undefined;
  @ViewChild('menu') menu: ElementRef | undefined;

  toggleMenu: boolean = false;

  onMenuButtonClick() {
    if (this.menuBtn && this.menu) {
      this.toggleMenu = !this.toggleMenu;
      this.menuBtn.nativeElement.classList.toggle('open');
      this.menu.nativeElement.classList.toggle('hidden');
      this.menu.nativeElement.classList.toggle('flex');
    }
  }

  header_title = [
    {
      title:"მთავარი",
    },
    {
      title:"კატეგორეიბი",
    },
    {
      title:"გვერდები",
    },
]
header_button = [
  {title:"რეგისტრაცია"},
  {title:"შესვლა"}
]
  
}

