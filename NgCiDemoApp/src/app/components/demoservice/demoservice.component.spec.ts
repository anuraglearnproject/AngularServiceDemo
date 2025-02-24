import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoserviceComponent } from './demoservice.component';

describe('DemoserviceComponent', () => {
  let component: DemoserviceComponent;
  let fixture: ComponentFixture<DemoserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
