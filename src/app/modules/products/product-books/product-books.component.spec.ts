import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBooksComponent } from './product-books.component';

describe('ProductBooksComponent', () => {
  let component: ProductBooksComponent;
  let fixture: ComponentFixture<ProductBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
