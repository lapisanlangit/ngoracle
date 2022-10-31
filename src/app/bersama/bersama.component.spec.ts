import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BersamaComponent } from './bersama.component';

describe('BersamaComponent', () => {
  let component: BersamaComponent;
  let fixture: ComponentFixture<BersamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BersamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BersamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
