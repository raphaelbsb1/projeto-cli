import { ProjetoCliPage } from './app.po';

describe('projeto-cli App', function() {
  let page: ProjetoCliPage;

  beforeEach(() => {
    page = new ProjetoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
