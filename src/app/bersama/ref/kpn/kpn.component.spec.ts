import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpnComponent } from './kpn.component';

describe('KpnComponent', () => {
  let component: KpnComponent;
  let fixture: ComponentFixture<KpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
