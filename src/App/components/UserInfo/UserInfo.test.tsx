import React from 'react';
import { render } from '@testing-library/react';
import { UserInfo } from './UserInfo';
import '@testing-library/jest-dom';


describe('UserInfo', () => {
    const mockUser = {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
        phone: '123-456-7890',
        username: 'testuser',
        website: 'test.com',
        company: {
            bs: 'test bs',
            catchPhrase: 'test catchPhrase',
            name: 'Test Company'
        },
        address: 'Test address'
    };

    it('renders user information when user prop is provided', () => {


        const { getByText } = render(<UserInfo user={mockUser} />);

        expect(getByText('Test User')).toBeInTheDocument();
        expect(getByText('123-456-7890')).toBeInTheDocument();
    });

    it('does not render when user prop is null', () => {
        const { container } = render(<UserInfo user={null} />);
        expect(container.firstChild).toBeNull();
    });
});
