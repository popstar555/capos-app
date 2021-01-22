import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashManageComponent } from './cash-manage.component';

describe('CashManageComponent', () => {
  let component: CashManageComponent;
  let fixture: ComponentFixture<CashManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
