import { NgUcscAppPage } from './app.po';

describe('ng-ucsc-app App', function() {
  let page: NgUcscAppPage;

  beforeEach(() => {
    page = new NgUcscAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
