import { StudyAngularTwoFourPage } from './app.po';

describe('study-angular-two-four App', function() {
  let page: StudyAngularTwoFourPage;

  beforeEach(() => {
    page = new StudyAngularTwoFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
