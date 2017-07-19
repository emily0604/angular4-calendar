import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { BlogService } from '../blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let element, de;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        PostDetailComponent
      ],
      providers: [
        BlogService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance; // to access properties and methods
    element = fixture.nativeElement; // to access DOM element
    de = fixture.debugElement; // test helper
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('blogPost should contain id, title, body, userId', async(() => {
    fixture.whenStable().then(() => {
      expect(component.blogPost.hasOwnProperty('id')).toBeTruthy();
      expect(component.blogPost.hasOwnProperty('title')).toBeTruthy();
      expect(component.blogPost.hasOwnProperty('body')).toBeTruthy();
      expect(component.blogPost.hasOwnProperty('userId')).toBeTruthy();
    })
  }));

  it('should renders article, author and content', async(() => {
    fixture.whenStable().then(() => {
      expect(de.query(By.css('.entry-by')).nativeElement.innerText.length).toBeTruthy();
      expect(de.query(By.css('.entry-content')).nativeElement.innerText.length).toBeTruthy();
    })
  }));
});
