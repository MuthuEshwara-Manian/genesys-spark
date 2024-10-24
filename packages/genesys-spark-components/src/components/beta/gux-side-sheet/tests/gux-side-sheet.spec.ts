import { newSpecPage } from '@test/specTestUtils';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { GuxSideSheet } from '../gux-side-sheet';
import { GuxSideSheetHeading } from '../components/gux-side-sheet-heading/gux-side-sheet-heading';
import { GuxModalSideSheet } from '../gux-modal-side-sheet';
import { GuxDismissButton } from '../../../stable/gux-dismiss-button/gux-dismiss-button';

describe('gux-side-sheet-beta', () => {
  it.each(['small', 'medium', 'large'])(
    'renders correctly with %s size',
    async size => {
      const page = await newSpecPage({
        components: [GuxSideSheet, GuxSideSheetHeading, GuxDismissButton],
        html: `
        <gux-side-sheet-beta size="${size}">
          <gux-side-sheet-heading
            slot="heading"
            level="3"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading>
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
        </gux-side-sheet-beta>
      `
      });

      expect(page.root).toMatchSnapshot();
    }
  );

  it.each([1, 2, 3, 4, 5, 6])(
    'renders correctly with h%d heading level',
    async headingLevel => {
      const page = await newSpecPage({
        components: [GuxSideSheet, GuxSideSheetHeading, GuxDismissButton],
        html: `
        <gux-side-sheet-beta size="medium">
          <gux-side-sheet-heading
            slot="heading"
            level="${headingLevel}"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading>
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
        </gux-side-sheet-beta>
      `
      });

      expect(page.root).toMatchSnapshot();
    }
  );

  it('emits sideSheetDismiss event when dismissed', async () => {
    const page = await newSpecPage({
      components: [GuxSideSheet, GuxSideSheetHeading, GuxDismissButton],
      html: `
        <gux-side-sheet-beta>
          <gux-side-sheet-heading
            slot="heading"
            level="3"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading
          <div slot="description">Description</div>
          <div slot="content">Content</div>
          <div slot="footer">Footer</div>
        </gux-side-sheet-beta>
      `
    });

    const dismissButton =
      page.root.shadowRoot.querySelector('gux-dismiss-button');

    const eventSpy = jest.fn();
    page.root.addEventListener('sideSheetDismiss', eventSpy);

    dismissButton.click();
    expect(eventSpy).toHaveBeenCalled();
  });
});

const showModal = jest.fn();
const close = jest.fn();

describe('gux-modal-side-sheet-beta', () => {
  beforeAll(() => {
    // Required until JSDOM supports the dialog element. See:
    // https://github.com/jsdom/jsdom/issues/3294
    // https://github.com/jsdom/jsdom/pull/3403
    Object.assign(MockHTMLElement.prototype, {
      showModal: showModal,
      close: close
    });
  });

  beforeEach(() => {
    showModal.mockReset();
    close.mockReset();
  });

  it.each([true, false])('renders correctly when open is %p', async open => {
    const page = await newSpecPage({
      components: [
        GuxModalSideSheet,
        GuxSideSheet,
        GuxSideSheetHeading,
        GuxDismissButton
      ],
      html: `
          <gux-modal-side-sheet-beta ${open ? 'open' : ''}>
            <gux-side-sheet-heading
              slot="heading"
              level="2"
              icon="fa/diamond-regular"
            >
              Side sheet title
            </gux-side-sheet-heading>
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
          </gux-modal-side-sheet-beta>
        `
    });

    expect(page.root).toMatchSnapshot();
  });

  it.each(['small', 'medium', 'large'])(
    'renders correctly with %s size',
    async size => {
      const page = await newSpecPage({
        components: [
          GuxModalSideSheet,
          GuxSideSheet,
          GuxSideSheetHeading,
          GuxDismissButton
        ],
        html: `
        <gux-modal-side-sheet-beta size="${size}">
          <gux-side-sheet-heading
            slot="heading"
            level="2"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading>
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
        </gux-modal-side-sheet-beta>
      `
      });

      expect(page.root).toMatchSnapshot();
    }
  );

  it('closes the modal side sheet when the escape key is pressed', async () => {
    const page = await newSpecPage({
      components: [
        GuxModalSideSheet,
        GuxSideSheet,
        GuxSideSheetHeading,
        GuxDismissButton
      ],
      html: `
        <gux-modal-side-sheet-beta open>
          <gux-side-sheet-heading
            slot="heading"
            level="2"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading>
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
        </gux-modal-side-sheet-beta>
      `
    });

    const eventSpy = jest.fn();
    page.root.addEventListener('modalSideSheetDismiss', eventSpy);

    const event = new KeyboardEvent('keydown', {
      key: 'Escape'
    });
    page.root.dispatchEvent(event);
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should call showModal & close methods when called', async () => {
    const page = await newSpecPage({
      components: [
        GuxModalSideSheet,
        GuxSideSheet,
        GuxSideSheetHeading,
        GuxDismissButton
      ],
      html: `
        <gux-modal-side-sheet-beta>
          <gux-side-sheet-heading
            slot="heading"
            level="2"
            icon="fa/diamond-regular"
          >
            Side sheet title
          </gux-side-sheet-heading>
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
        </gux-modal-side-sheet-beta>
      `
    });

    const eventSpy = jest.fn();
    page.root.addEventListener('modalSideSheetDismiss', eventSpy);

    page.rootInstance.showModal();
    expect(showModal).toHaveBeenCalled();
    expect(eventSpy).not.toHaveBeenCalled();

    page.rootInstance.close();
    expect(close).toHaveBeenCalled();
    expect(eventSpy).toHaveBeenCalled();
  });
});
