import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaxpageComponent } from './jaxpage.component';

describe('JaxpageComponent', () => {
  let component: JaxpageComponent;
  let fixture: ComponentFixture<JaxpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaxpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
