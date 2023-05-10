import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tests for Counter App',()=>{
    it('Test cases', () => {
      render(<App />);
      const initialCalue=screen.getByText(/0/i);
      expect(initialCalue).toHaveTextContent(0);
      const increment=screen.getByRole('button', {
        name: /increment/i
      });
      userEvent.click(increment);
      expect(initialCalue).toHaveTextContent(1);
      const decrement=screen.getByRole('button', {
        name: /decrement/i
      });
      userEvent.click(decrement);
      expect(initialCalue).toHaveTextContent(0);

      /** 
       * Todo:
       * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
       * 2. use getByRole/findByRole query to find 'increment' button.
       * 3. Use userEvent to click on increment button to increment the count by 1.
       * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
       * 5. Similarly perform actions 3 and 4 for decrement.
       * 
      */
    });
})
