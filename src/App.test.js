// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughHeath title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughHeath/i);
    expect(titleElement).toBeInTheDocument();
});
