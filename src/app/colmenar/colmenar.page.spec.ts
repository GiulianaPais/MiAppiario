import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColmenarPage } from './colmenar.page';

describe('ColmenarPage', () => {
  let component: ColmenarPage;
  let fixture: ComponentFixture<ColmenarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColmenarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColmenarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
