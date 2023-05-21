import { screen } from '@testing-library/jest-dom';
import 'testing-library/jest-dom';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('when it instanciate', () => {
    document.body.innerHTML = '<slot></slot>';
    new Header('slot');
    const element = screen.getByRole('heading');
    // eslint-disable-next-line max-statements-per-line
    test('it should be see in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
