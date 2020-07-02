import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrailersPage } from './trailers.page';

describe('TrailersPage', () => {
  let component: TrailersPage;
  let fixture: ComponentFixture<TrailersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrailersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
