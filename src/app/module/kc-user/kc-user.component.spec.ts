import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcUserComponent } from './kc-user.component';

describe('KcUserComponent', () => {
  let component: KcUserComponent;
  let fixture: ComponentFixture<KcUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KcUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
