import { Angular2FormValidationPage } from './app.po';

describe('angular2-form-validation App', () => {
  let page: Angular2FormValidationPage;

  beforeEach(() => {
    page = new Angular2FormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
