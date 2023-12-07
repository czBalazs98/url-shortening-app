import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShortLinkCardComponent} from './short-link-card.component';

describe('ShortLinkCardComponent', () => {
  let component: ShortLinkCardComponent;
  let fixture: ComponentFixture<ShortLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortLinkCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShortLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
