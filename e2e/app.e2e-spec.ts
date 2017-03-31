import { IAmMadPage } from './app.po';

describe('iam-mad App', () => {
  let page: IAmMadPage;

  beforeEach(() => {
    page = new IAmMadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
