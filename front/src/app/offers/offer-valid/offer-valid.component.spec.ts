import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferValidComponent } from './offer-valid.component';

describe('OfferValidComponent', () => {
  let component: OfferValidComponent;
  let fixture: ComponentFixture<OfferValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
