import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeRulesComponent } from './edge-rules.component';

describe('EdgeRulesComponent', () => {
  let component: EdgeRulesComponent;
  let fixture: ComponentFixture<EdgeRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdgeRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdgeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
