import { newSparkE2EPage, a11yCheck } from '../../../../../test/e2eTestUtils';

describe('gux-rich-text-editor-list', () => {
  [
    `<gux-rich-text-editor-list>
    <gux-rich-style-list-item text-style="heading-1" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    <gux-rich-style-list-item text-style="heading-2" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    <gux-rich-style-list-item text-style="heading-3" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    </gux-rich-text-editor-list>`
  ].forEach((html, index) => {
    it(`should display component as expected (${index + 1})`, async () => {
      const page = await newSparkE2EPage({ html });

      const element = await page.find('gux-rich-text-editor-list');

      await a11yCheck(page);

      expect(element.outerHTML).toMatchSnapshot();
    });
  });
});
