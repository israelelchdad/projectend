import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PohtosComponent } from './pohtos.component';

describe('PohtosComponent', () => {
  let component: PohtosComponent;
  let fixture: ComponentFixture<PohtosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PohtosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PohtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
