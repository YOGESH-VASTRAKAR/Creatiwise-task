import { render, screen } from '@testing-library/react';
import Expertise from '../components/Expertise';

test('renders all expertise titles', () => {
  render(<Expertise />);
  expect(screen.getByText(/Branding/i)).toBeInTheDocument();
  expect(screen.getByText(/UI Design/i)).toBeInTheDocument();
  expect(screen.getByText(/UX Design/i)).toBeInTheDocument();
  expect(screen.getByText(/Development/i)).toBeInTheDocument();
});
