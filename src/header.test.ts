import { screen } from '@testing-library/jest-dom';
import 'testing-library/jest-dom';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('when it instanciate', () => {
    new Header('slot');
    const element = screen.getByRole('contentinfo');
    document.body.innerHTML = '<slot></slot>';

    test('it should be see in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
