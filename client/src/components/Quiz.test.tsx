import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Ensure expect is imported from vitest
import '@testing-library/jest-dom'; // This extends Jest's expect with additional matchers
import Quiz from './Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Quiz />);
    expect(getByText(/Start Quiz/i)).toBeInTheDocument(); // Adjust this based on your component's content
  });
});