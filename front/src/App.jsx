import React, { Component } from 'react'
import UserList from './UserList'

export default class App extends Component {
    state = {
        users: [],
        loading: false,
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

    render() {
        const { users, loading } = this.state;
        return (
            <div>
                <h1>A Simple User List</h1>
                {loading 
                    ? <h3>Loading...</h3> 
                    : (
                        <div>
                            {this.state.users.length 
                                ? (
                                    <UserList users={users} />
                                ) 
                                : <h3>No users!</h3>
                            }
                        </div>
                    )}
            </div>
        )
    }
}