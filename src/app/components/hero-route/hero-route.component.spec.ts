import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRouteComponent } from './hero-route.component';

describe('HeroRouteComponent', () => {
  let component: HeroRouteComponent;
  let fixture: ComponentFixture<HeroRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
