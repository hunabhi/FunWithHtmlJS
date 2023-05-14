import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  currentItemIndex: number | undefined;

  droppedItems:any = [];

  onDragStart(event: DragEvent, index: number) {
    this.currentItemIndex = index;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (this.currentItemIndex !== undefined) {
      let item = this.items.splice(this.currentItemIndex, 1)[0];
      this.droppedItems.push(item);
      this.currentItemIndex = undefined;
    }
  }
}
