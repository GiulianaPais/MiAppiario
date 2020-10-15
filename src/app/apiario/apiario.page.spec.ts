import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiarioPage } from './apiario.page';

describe('ApiarioPage', () => {
  let component: ApiarioPage;
  let fixture: ComponentFixture<ApiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
