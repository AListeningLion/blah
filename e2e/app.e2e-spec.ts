import { NinjaWarriorPage } from './app.po';

describe('ninja-warrior App', () => {
  let page: NinjaWarriorPage;

  beforeEach(() => {
    page = new NinjaWarriorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
