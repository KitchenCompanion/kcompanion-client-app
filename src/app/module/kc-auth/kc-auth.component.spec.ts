import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcAuthComponent } from './kc-auth.component';

describe('KcAuthComponent', () => {
  let component: KcAuthComponent;
  let fixture: ComponentFixture<KcAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KcAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
