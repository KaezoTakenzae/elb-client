import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  test('Button renders', () => {
    render(<Button text='' onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Passed text prop is used', () => {
    render(<Button text='buttonLabel' onClick={() => {}} />);
    const button = screen.getByText(/buttonLabel/i);
    expect(button).toBeInTheDocument();
  });

  test('Passed onClick prop is used', () => {
    let clicked = false;
    render(<Button text='' onClick={() => { clicked = true; }} />);
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(clicked).toEqual(true);
  });
})
