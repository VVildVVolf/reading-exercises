import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnedTextComponent } from './spinned-text.component';

describe('SpinnedTextComponent', () => {
  let component: SpinnedTextComponent;
  let fixture: ComponentFixture<SpinnedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
