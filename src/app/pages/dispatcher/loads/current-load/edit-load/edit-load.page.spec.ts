import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLoadPage } from './edit-load.page';

describe('EditLoadPage', () => {
  let component: EditLoadPage;
  let fixture: ComponentFixture<EditLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
