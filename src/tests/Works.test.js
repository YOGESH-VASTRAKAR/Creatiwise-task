import { render, screen } from '@testing-library/react';
import Works from '../components/Works';

test('renders section title and case study cards', () => {
  render(<Works />);
  expect(screen.getByText(/Works/i)).toBeInTheDocument();
  expect(screen.getAllByText(/View Case Study/i).length).toBeGreaterThan(0);
});
