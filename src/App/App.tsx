import React from "react";
import { Button, UserInfo } from './components'
import { useRandomUser, useThrottle } from './hooks'


export function App(): JSX.Element {
    const { data: user, isError, refetch } = useRandomUser();

    const throttledRefetch = useThrottle(refetch, 500);

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={throttledRefetch} />
            <UserInfo user={user || null} />
            {isError && <p>There was an error loading the user.</p>}
        </div>
    );
}

