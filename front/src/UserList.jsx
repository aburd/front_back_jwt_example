import React from 'react'
import PropTypes from 'prop-types'

export function User({
    id,
    firstName,
    lastName,
    jobTitle,
}) {
    return (
        <div className="user">
            <div>ID: {id}</div>
            <div>Name: {firstName} {lastName}</div>
            <div>Job Title: {jobTitle}</div>
        </div>
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
        <ul className="user-list">
            {users.map(user => (
                <li key={user.id}>
                    <a onClick={() => onClick(user.id)}>{user.firstName} {user.lastName}</a>
                </li>
            ))}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserType)),
    onClick: PropTypes.func,
}