import React from 'react'
import PropTypes from 'prop-types'

function User({
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

export default function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <User 
                    key={user.id}
                    {...user} 
                />
            ))}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserType))
}