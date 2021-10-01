import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCardCaruselComponent } from './magic-card-carusel.component';

describe('MagicCardCaruselComponent', () => {
  let component: MagicCardCaruselComponent;
  let fixture: ComponentFixture<MagicCardCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicCardCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCardCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
