import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashFormComponent } from './clash-form.component';

describe('ClashFormComponent', () => {
  let component: ClashFormComponent;
  let fixture: ComponentFixture<ClashFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClashFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
