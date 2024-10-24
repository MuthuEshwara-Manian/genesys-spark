import { newSparkE2EPage, a11yCheck } from '../../../../test/e2eTestUtils';

describe('side panel', () => {
  it('should render', async () => {
    const page = await newSparkE2EPage({
      html: `<gux-side-panel-beta>
            <gux-side-panel-heading
              slot="heading"
              level="3"
              icon="fa/diamond-regular"
            >
              Side panel title
            </gux-side-panel-heading>
            <h2 slot="description">Description goes here</h2>
            <div slot="content">
              Content goes here.
            </div>
            <div slot="footer">
              <gux-cta-group>
                <gux-button slot="primary">Primary</gux-button>
                <gux-button slot="secondary">Secondary</gux-button>
                <gux-button slot="dismiss">Dismiss</gux-button>
              </gux-cta-group>
            </div>
          </gux-side-panel-beta>`
    });
    const element = await page.find('gux-side-panel-beta');

    expect(element.outerHTML).toMatchSnapshot();

    await a11yCheck(page);
  });
});

describe('modal side panel', () => {
  const html = `<gux-modal-side-panel-beta>
            <gux-side-panel-heading
              slot="heading"
              level="2"
              icon="fa/diamond-regular"
            >
              Side panel title
            </gux-side-panel-heading>
            <h2 slot="description">Description goes here</h2>
            <div slot="content">
              Content goes here.
            </div>
            <div slot="footer">
              <gux-cta-group>
                <gux-button slot="primary">Primary</gux-button>
                <gux-button slot="secondary">Secondary</gux-button>
                <gux-button slot="dismiss">Dismiss</gux-button>
              </gux-cta-group>
            </div>
          </gux-modal-side-panel-beta>`;

  it('should render', async () => {
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-modal-side-panel-beta');

    expect(element.outerHTML).toMatchSnapshot();

    await a11yCheck(page);
  });

  it('should show/hide when toggling the open attribute', async () => {
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-modal-side-panel-beta');
    const dialog = await page.find('pierce/dialog');

    expect(element.getAttribute('open')).toBe(null);
    expect(await dialog.isVisible()).toBe(false);

    element.setAttribute('open', '');
    await page.waitForChanges();
    expect(await dialog.isVisible()).toBe(true);
  });

  it('should close when clicking the dismiss button', async () => {
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-modal-side-panel-beta');
    const dialog = await page.find('pierce/dialog');
    const dismissButton = await page.find(
      'pierce/gux-dismiss-button >>> button'
    );

    element.setAttribute('open', '');
    await page.waitForChanges();
    expect(await dialog.isVisible()).toBe(true);

    await dismissButton.click();
    await page.waitForChanges();
    expect(await dialog.isVisible()).toBe(false);
  });

  it('it should toggle when showModal or close is called', async () => {
    const page = await newSparkE2EPage({ html });
    const element = await page.find('gux-modal-side-panel-beta');
    const dialog = await page.find('pierce/dialog');

    expect(element.getAttribute('open')).toBe(null);
    expect(await dialog.isVisible()).toBe(false);

    await element.callMethod('showModal');
    await page.waitForChanges();
    expect(await dialog.isVisible()).toBe(true);

    await element.callMethod('close');
    await page.waitForChanges();
    expect(await dialog.isVisible()).toBe(false);
  });
});
