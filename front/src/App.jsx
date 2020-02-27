import React, { Component } from 'react'
import UserList, { User } from './UserList'

export default class App extends Component {
    state = {
        users: [],
        loading: false,
        selectedUserId: null,
    }
    
    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        const url = `/api/users`
        this.setState({ loading: true })
        fetch(url, { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(({ users }) => {
                this.setState({
                    loading: false,
                    users,
                })
            })
            .catch((e) => {
                this.setState({ loading: false })
            })
    }
    
    fetchUser = (id) => {
        const url = `/api/users/${id}`
        this.setState({ loading: true })
        fetch(url, { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(({ user }) => {
                this.setState({
                    loading: false,
                    selectedUserId: user.id,
                })
            })
            .catch((e) => {
                this.setState({ loading: false })
            })
    }

    render() {
        const { users, loading, selectedUserId } = this.state;
        return (
            <div>
                <h1>A Simple User List</h1>
                {loading 
                    ? <h3>Loading...</h3> 
                    : (
                        <div>
                            {selectedUserId && (
                                <User 
                                    {...(users.find(u => u.id == selectedUserId))}
                                />
                            )}
                            {this.state.users.length 
                                ? (
                                    <UserList 
                                        users={users} 
                                        onClick={id => this.fetchUser(id)}
                                    />
                                ) 
                                : <h3>No users!</h3>
                            }
                        </div>
                    )}
            </div>
        )
    }
}