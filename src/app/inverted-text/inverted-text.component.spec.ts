import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedTextComponent } from './inverted-text.component';

describe('InvertedTextComponent', () => {
  let component: InvertedTextComponent;
  let fixture: ComponentFixture<InvertedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
