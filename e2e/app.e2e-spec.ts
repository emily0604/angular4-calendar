import { Angular4CalendarPage } from './app.po';

describe('angular4-calendar App', () => {
  let page: Angular4CalendarPage;

  beforeEach(() => {
    page = new Angular4CalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
