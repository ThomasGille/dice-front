import { FirstTryPage } from './app.po';

describe('first-try App', () => {
  let page: FirstTryPage;

  beforeEach(() => {
    page = new FirstTryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
