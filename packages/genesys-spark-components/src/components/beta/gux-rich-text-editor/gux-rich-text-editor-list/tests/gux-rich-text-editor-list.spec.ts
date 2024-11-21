import { newSpecPage } from '@test/specTestUtils';

import { GuxRichTextEditorList } from '../gux-rich-text-editor-list';

const components = [GuxRichTextEditorList];
const language = 'en';

describe('gux-rich-text-editor-list', () => {
  it('should build and render', async () => {
    const html = `
    <gux-rich-text-editor-list>
    <gux-rich-style-list-item text-style="heading-1" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    <gux-rich-style-list-item text-style="heading-2" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    <gux-rich-style-list-item text-style="heading-3" role="listitem" hydrated="">Heading 1</gux-rich-style-list-item>
    </gux-rich-text-editor-list>
    `;
    const page = await newSpecPage({ components, html, language });

    expect(page.rootInstance).toBeInstanceOf(GuxRichTextEditorList);
    expect(page.root).toMatchSnapshot();
  });
});
