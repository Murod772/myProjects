import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActiveDriversPage } from './active-drivers.page';

describe('ActiveDriversPage', () => {
  let component: ActiveDriversPage;
  let fixture: ComponentFixture<ActiveDriversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDriversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveDriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
