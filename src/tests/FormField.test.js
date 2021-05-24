import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '../components/FormField';

const properties = [
  {
    name: "Awesome House",
    _id: "1234567"
  },
  {
    name: "Boring House",
    _id: "7654321"
  }
];

describe('FormField', () => {
  test('Input renders', () => {
    render(<FormField
      input='Summary'
      name='summary'
      value={''}
      onChange={() => {}}
    />);
    const input = screen.getByLabelText('Summary');
    expect(input).toBeInTheDocument();
  });

  test('Input can be changed and value updates', () => {
    let value = '';
    render(<FormField
      input='Summary'
      name='summary'
      value={value}
      onChange={(event) => { value = event.target.value; }}
    />);
    const input = screen.getByLabelText('Summary');
    fireEvent.change(input, { target: { value: 'Operation Make House More Awesome' } } );
    expect(value).toEqual('Operation Make House More Awesome');
  });

  test('Textarea renders', () => {
    const { container } = render(<FormField
      input='Description'
      type='textarea'
      name='description'
      value={''}
      onChange={() => {}}
    />);
    const textarea = container.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
  });

  test('Textarea can be changed and value updates', () => {
    let value = '';
    render(<FormField
      input='Description'
      type='textarea'
      name='description'
      value={value}
      onChange={(event) => { value = event.target.value }}
    />);
    const textarea = screen.getByLabelText('Description');
    fireEvent.change(textarea, { target: { value: 'The House Gets Extra Sparkles' } } );
    expect(textarea.value).toEqual('The House Gets Extra Sparkles');
  });

  test('Select renders', () => {
    const { container } = render(<FormField
      input='Property'
      type='select'
      options={[]}
      name='property'
      value={''}
      onChange={() => {}}
    />);
    const select = container.querySelector('select');
    expect(select).toBeInTheDocument();
  });

  test('Select renders with options', async () => {
    const { container } = render(<FormField
      input='Property'
      type='select'
      options={properties}
      name='property'
      value={''}
      onChange={() => {}}
    />);
    const select = container.querySelector('select');
    expect(select.options.length).toEqual(2);
  });

  test('Select options can be changed', async () => {
    const { container, getByText } = render(<FormField
      input='Property'
      type='select'
      options={properties}
      name='property'
      value={''}
      onChange={() => {}}
    />);
    const select = container.querySelector('select');
    fireEvent.change(select, { target: { value: '7654321' } } );
    expect((getByText('Awesome House')).selected).toBeFalsy();
    expect((getByText('Boring House')).selected).toBeTruthy();
  });
})
