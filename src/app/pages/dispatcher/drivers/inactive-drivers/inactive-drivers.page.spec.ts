import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InactiveDriversPage } from './inactive-drivers.page';

describe('InactiveDriversPage', () => {
  let component: InactiveDriversPage;
  let fixture: ComponentFixture<InactiveDriversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveDriversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InactiveDriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
