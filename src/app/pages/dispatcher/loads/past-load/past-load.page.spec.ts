import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastLoadPage } from './past-load.page';

describe('PastLoadPage', () => {
  let component: PastLoadPage;
  let fixture: ComponentFixture<PastLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
