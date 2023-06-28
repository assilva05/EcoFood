import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPagamentoComponent } from './nav-pagamento.component';

describe('NavPagamentoComponent', () => {
  let component: NavPagamentoComponent;
  let fixture: ComponentFixture<NavPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPagamentoComponent]
    });
    fixture = TestBed.createComponent(NavPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
