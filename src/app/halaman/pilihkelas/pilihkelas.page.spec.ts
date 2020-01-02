import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihkelasPage } from './pilihkelas.page';

describe('PilihkelasPage', () => {
  let component: PilihkelasPage;
  let fixture: ComponentFixture<PilihkelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihkelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihkelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
