import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeRestuarant } from './see-restuarant';

describe('SeeRestuarant', () => {
  let component: SeeRestuarant;
  let fixture: ComponentFixture<SeeRestuarant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeRestuarant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeRestuarant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
