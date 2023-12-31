import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeerComponent } from './create-beer.component';

describe('CreateBeerComponent', () => {
  let component: CreateBeerComponent;
  let fixture: ComponentFixture<CreateBeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBeerComponent]
    });
    fixture = TestBed.createComponent(CreateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
