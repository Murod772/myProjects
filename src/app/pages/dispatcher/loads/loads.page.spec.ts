import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadsPage } from './loads.page';

describe('LoadsPage', () => {
  let component: LoadsPage;
  let fixture: ComponentFixture<LoadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
