import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import fetchMock from 'jest-fetch-mock';
import { User } from './types'

describe('App Component', () => {

    const queryClient = new QueryClient();

    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('should render without crashing', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>);
    });

    it('should fetch a random user when button is clicked', async () => {
        const mockUser: User = {
            id: 1,
            email: 'test@example.com',
            name: 'Username',
            phone: '1234567890',
            username: 'testuser',
            website: 'https://example.com',
            company: {
                bs: 'test bs',
                catchPhrase: 'test phrase',
                name: 'Test Corp'
            },
            address: '123 Test St'
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockUser));

        const { getByText, findByText } = render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>);

        fireEvent.click(getByText('get random user'));

        const userName = await findByText('Username');
        expect(userName).toBeInTheDocument();
    });

});