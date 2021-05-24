import { render } from '@testing-library/react';
import Table from '../components/Table';

const columns = [
  {
    name: 'Id',
    accessor: '_id'
  },
  {
    name: 'Summary',
    accessor: 'summary'
  }
];

const jobs = [
  {
    _id: '1234',
    summary: 'Job 1'
  },
  {
    _id: '1234',
    summary: 'Job 2'
  }
]

describe('Table', () => {
  test('Table does not render if data is empty', () => {
    let { container } = render(<Table columns={columns} data={[]} />);
    expect(container.innerHTML).toBeFalsy();
  });

  test('Table renders if data is present', () => {
    let { container } = render(<Table columns={columns} data={jobs} />);
    expect(container.innerHTML).toBeTruthy();
  });

  test('Table renders data and fields', () => {
    let { container } = render(<Table columns={columns} data={jobs} />);
    expect(container.innerHTML.indexOf('Id')).toBeGreaterThanOrEqual(0);
    expect(container.innerHTML.indexOf('Summary')).toBeGreaterThanOrEqual(0);
    expect(container.innerHTML.indexOf('Job 1')).toBeGreaterThanOrEqual(0);
    expect(container.innerHTML.indexOf('Job 2')).toBeGreaterThanOrEqual(0);
  });
})
