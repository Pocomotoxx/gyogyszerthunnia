import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';

test('renders login page', () => {
  render(
    <Router>
      <LoginPage />
    </Router>
  );
  const title = screen.getByText(/Login Page/i);
  expect(title).toBeInTheDocument();
});
