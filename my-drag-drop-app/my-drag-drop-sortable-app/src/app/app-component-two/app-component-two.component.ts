import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './app-component-two.component.html',
  styleUrls: ['./app-component-two.component.css']
})
export class AppComponentTwoComponent {
  items1 = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  items2 = ['Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer!.setData('text/plain', item);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    const item = event.dataTransfer!.getData('text/plain');
    const target = event.target as HTMLElement;
    const list = target.closest('.box')!.querySelector('.list') as HTMLElement;

    if (list) {
      list.insertAdjacentHTML('beforeend', `<li class="item">${item}</li>`);
    }
  }
}
