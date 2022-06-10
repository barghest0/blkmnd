import { render } from 'test-utils/utils';

import ContactForm from './ContactForm';

describe('ContactForm rendering tests', () => {
  test('correct component rendering', () => {
    const { getByLabelText } = render(<ContactForm />);
    const contactForm = getByLabelText(/name/i);
    expect(contactForm).toBeInTheDocument();
  });
});
