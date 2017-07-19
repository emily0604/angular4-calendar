import { TestBed, inject, async } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('BlogService', () => {
  let blogService, mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BlogService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    });
  });

  beforeEach(inject([BlogService, XHRBackend], (bs, mb) => {
    blogService = bs;
    mockBackend = mb;
  }));

  it('should be created', () => {
    expect(blogService).toBeTruthy();
  });

  it('getList() should return 3 mock posts', async(() => {
    const response = new Response(new ResponseOptions({
      body: JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat',
          body: 'quia et suscipit suscipit recusandae consequuntur'
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae sequi sint nihil'
        },
        {
          userId: 1,
          id: 3,
          title: 'exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure voluptatem occaecati'
        }
      ])
    }));

    mockBackend.connections.subscribe(connection => {
        connection.mockRespond(response);
      }
    );

    blogService.getList().subscribe(
      result => expect(result.length).toEqual(3),
      err => expect(err).toEqual(null)
    );
  }));

  it('getOne(1) should return a mock post with id = 1', async(() => {
    const response = new Response(new ResponseOptions({
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat',
        body: 'quia et suscipit suscipit recusandae consequuntur'
      })
    }));

    mockBackend.connections.subscribe(connection => {
        connection.mockRespond(response);
      }
    );

    blogService.getOne(1).subscribe(
      result => expect(result.id).toBe(1),
      err => expect(err).toEqual(null)
    );
  }));
});
