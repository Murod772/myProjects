import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispatcherPage } from './dispatcher.page';

describe('DispatcherPage', () => {
  let component: DispatcherPage;
  let fixture: ComponentFixture<DispatcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatcherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispatcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
