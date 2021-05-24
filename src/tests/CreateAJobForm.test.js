import { render, screen, fireEvent } from '@testing-library/react';
import CreateAJobForm from '../components/CreateAJobForm';

const properties = [
  {
    name: "Awesome House",
    _id: "1234567"
  },
  {
    name: "Not So Awesome House",
    _id: "7654321"
  }
];

describe('CreateAJobForm', () => {
  test('Form renders', () => {
    const { container } = render(<CreateAJobForm
      closeFunc={() => {}}
      properties={properties}
    />);
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  test('Summary field exists and can be populated', () => {
    render(<CreateAJobForm
      closeFunc={() => {}}
      properties={properties}
    />);
    const input = screen.getByLabelText('Summary');
    fireEvent.change(input, { target: { value: 'Operation Make House More Awesome' } } );
    expect(input.value).toEqual('Operation Make House More Awesome');
  });

  test('Description field exists and can be populated', () => {
    render(<CreateAJobForm
      closeFunc={() => {}}
      properties={properties}
    />);
    const input = screen.getByLabelText('Description');
    fireEvent.change(input, { target: {
      value: 'How do we make a house more awesome? We throw lots of sparkles on it!'
    } } );
    expect(input.value).toEqual(
      'How do we make a house more awesome? We throw lots of sparkles on it!'
    );
  });

  test('Property field exists and can be changed', () => {
    let { getByText } = render(<CreateAJobForm
      closeFunc={() => {}}
      properties={properties}
    />);
    const select = screen.getByLabelText('Property');
    fireEvent.change(select, { target: { value: '7654321' } } );
    expect((getByText('Awesome House')).selected).toBeFalsy();
    expect((getByText('Not So Awesome House')).selected).toBeTruthy();
  });
})
