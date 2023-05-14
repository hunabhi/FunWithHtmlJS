import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropSortingExampleComponent } from './cdk-drag-drop-sorting-example.component';

describe('CdkDragDropSortingExampleComponent', () => {
  let component: CdkDragDropSortingExampleComponent;
  let fixture: ComponentFixture<CdkDragDropSortingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdkDragDropSortingExampleComponent]
    });
    fixture = TestBed.createComponent(CdkDragDropSortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
