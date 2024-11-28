import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRulesComponent } from './active-rules.component';

describe('ActiveRulesComponent', () => {
  let component: ActiveRulesComponent;
  let fixture: ComponentFixture<ActiveRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
