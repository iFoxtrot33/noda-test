import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('App Component', () => {
    it('should call onClick when button is clicked', () => {
        const mockOnClick = jest.fn();

        const { getByText } = render(<Button onClick={mockOnClick} />);

        const buttonElement = getByText("get random user");
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});