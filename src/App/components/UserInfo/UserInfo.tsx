import React from 'react'
import { IUserInfoProps } from './types'

export const UserInfo = React.memo(function UserInfo({ user }: IUserInfoProps): JSX.Element | null {
    if (!user) return null;
    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                </tr>
            </tbody>
        </table>
    );
})