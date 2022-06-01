import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvideoComponent } from './elvideo.component';

describe('ElvideoComponent', () => {
  let component: ElvideoComponent;
  let fixture: ComponentFixture<ElvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
