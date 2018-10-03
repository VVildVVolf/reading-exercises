import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReplacerComponent } from './main-replacer.component';

describe('MainReplacerComponent', () => {
  let component: MainReplacerComponent;
  let fixture: ComponentFixture<MainReplacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReplacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
