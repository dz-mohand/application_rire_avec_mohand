import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBisComponent } from './contacts-bis.component';

describe('ContactsBisComponent', () => {
  let component: ContactsBisComponent;
  let fixture: ComponentFixture<ContactsBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
