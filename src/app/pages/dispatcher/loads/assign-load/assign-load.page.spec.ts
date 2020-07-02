import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignLoadPage } from './assign-load.page';

describe('AssignLoadPage', () => {
  let component: AssignLoadPage;
  let fixture: ComponentFixture<AssignLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
