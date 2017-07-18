import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ChildrenOutletContexts
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
