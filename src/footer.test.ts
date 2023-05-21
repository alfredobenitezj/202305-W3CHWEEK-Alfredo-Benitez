import { screen } from '@testing-library/jest-dom';
import 'testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the component Header', () => {
  describe('when it instanciate', () => {
    new Footer('slot');
    const element = screen.getByRole('heading');
    document.body.innerHTML = '<slot></slot>';

    test('it should be see in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
