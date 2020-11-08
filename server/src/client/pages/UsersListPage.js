import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions';

class  UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    head() {
        const title = `Users List - ${this.props.users.length} Users Loaded`
        return (
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}                
                <h2>List of Users</h2>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
    loadData: loadData
};