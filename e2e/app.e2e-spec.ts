import { AdministrativoPage } from './app.po';

describe('administrativo App', () => {
  let page: AdministrativoPage;

  beforeEach(() => {
    page = new AdministrativoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
