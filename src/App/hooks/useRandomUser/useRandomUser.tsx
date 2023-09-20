import { useQuery } from 'react-query';
import { User } from '../../types';
import { USER_ENDPOINT } from '../../constants';

const fetchRandomUser = async () => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    const response = await fetch(`${USER_ENDPOINT}/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<User>;
};

export const useRandomUser = () => {
    return useQuery('randomUser', fetchRandomUser, {
        staleTime: 600000,
        cacheTime: 86400000,
        retry: 1,
    });
};