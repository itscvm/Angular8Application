import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClustertabComponent } from './clustertab.component';

describe('ClustertabComponent', () => {
  let component: ClustertabComponent;
  let fixture: ComponentFixture<ClustertabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClustertabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClustertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
