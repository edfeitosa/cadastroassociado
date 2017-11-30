import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancariosComponent } from './bancarios.component';

describe('BancariosComponent', () => {
  let component: BancariosComponent;
  let fixture: ComponentFixture<BancariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
