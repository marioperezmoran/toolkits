import { ToolkitsAppPage } from './app.po';

describe('toolkits-app App', () => {
  let page: ToolkitsAppPage;

  beforeEach(() => {
    page = new ToolkitsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
