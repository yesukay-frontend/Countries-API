import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsCardComponent } from './country-details-card.component';

describe('CountryDetailsCardComponent', () => {
  let component: CountryDetailsCardComponent;
  let fixture: ComponentFixture<CountryDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
