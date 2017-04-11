import { JpinvoicePage } from './app.po';

describe('jpinvoice App', () => {
  let page: JpinvoicePage;

  beforeEach(() => {
    page = new JpinvoicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
