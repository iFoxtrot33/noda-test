import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import fetchMock from 'jest-fetch-mock';

import { useRandomUser } from './useRandomUser';

interface IProps {
    children?: React.ReactNode;
}

describe('useRandomUser hook', () => {
    const queryClient = new QueryClient();
    const wrapper: React.FC<IProps> = ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    afterEach(() => {
        queryClient.clear();
        fetchMock.resetMocks();
    });

    it('handles fetch errors gracefully', async () => {
        fetchMock.mockRejectOnce(new Error('API is down'));

        const { result } = renderHook(() => useRandomUser(), { wrapper });

        await waitFor(() => result.current.isError);

        expect(result.current.error).toEqual(null);
    });
});
