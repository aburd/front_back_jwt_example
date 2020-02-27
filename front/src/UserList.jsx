import React from 'react'
import PropTypes from 'prop-types'

export function User({
    id,
    firstName,
    lastName,
    jobTitle,
}) {
    return (
        <li>
            <div>ID: {id}</div>
            <div>Name: {firstName} {lastName}</div>
            <div>Job Title: {jobTitle}</div>
        </li>
    )
}

const UserType = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
}

User.propTypes = UserType

export default function UserList({ users, onClick }) {
    return (
        <ul>
            {users.map(user => (
                <div key={user.id}>
                    <a onClick={() => onClick(user.id)}>{user.firstName} {user.lastName}</a>
                </div>
            ))}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserType)),
    onClick: PropTypes.func,
}