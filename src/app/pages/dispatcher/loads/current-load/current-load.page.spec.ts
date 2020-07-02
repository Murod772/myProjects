import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentLoadPage } from './current-load.page';

describe('CurrentLoadPage', () => {
  let component: CurrentLoadPage;
  let fixture: ComponentFixture<CurrentLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
