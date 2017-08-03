import { AppPage } from './app.po';

describe('pop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Quickstart Library');
  });
});
