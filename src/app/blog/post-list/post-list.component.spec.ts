import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { BlogService } from '../blog.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        PostListComponent
      ],
      providers: [
        BlogService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance; // to access properties and methods
    element = fixture.nativeElement; // to access DOM element
    de = fixture.debugElement; // test helper
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('blogPosts should contains 10 articles', async(() => {
    fixture.whenStable().then(() => {
      expect(component.blogPosts.length).toEqual(10);
    })
  }));

  it('should renders 10 articles to screen', async(() => {
    fixture.whenRenderingDone().then(() => {
      expect(element.querySelectorAll('article').length).toEqual(10);
    })
  }));
});
