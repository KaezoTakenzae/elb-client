import { render, screen, fireEvent } from '@testing-library/react';
import CreateAJob from '../components/CreateAJob';

const properties = [
  {
    name: "Awesome House",
    _id: "1234567"
  }
];

describe('CreateAJob', () => {
  test('Button renders', () => {
    render(<CreateAJob properties={[]} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('If properties is empty, button is disabled', () => {
    render(<CreateAJob properties={[]} />);
    const button = screen.getByRole('button');
    expect(button.disabled).toEqual(true);
  });

  test('Form will open when button is clicked', () => {
    const { container } = render(<CreateAJob properties={properties} />);
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
  });
})
