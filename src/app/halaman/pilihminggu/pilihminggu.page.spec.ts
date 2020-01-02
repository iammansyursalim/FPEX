import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihmingguPage } from './pilihminggu.page';

describe('PilihmingguPage', () => {
  let component: PilihmingguPage;
  let fixture: ComponentFixture<PilihmingguPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihmingguPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihmingguPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
