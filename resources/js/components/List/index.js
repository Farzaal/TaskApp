import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fetchUsers, loadingStatus } from './selector';
import { listUsers, deleteUser } from './actions';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

class List extends React.Component {

    componentWillMount() {
        this.props.fetchAppUsers();
    }

    handleDelete(id) {
        this.props.deleteUser(id);
    }

    render() {
        
        if(this.props.loading) {
            return <Loader />;
        }

        return (
            <div className="container">
                <div className="card">
                    <div className="card-header bg-dark text-white">Users</div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Update</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><Link to={`/update/${user.id}`} className="btn btn-primary">Update </Link></td>
                                            <td><button onClick={ () => this.handleDelete(user.id) } className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        fetchAppUsers: () => dispatch(listUsers()),
        deleteUser: (payload) => dispatch(deleteUser(payload)),
    }
}

const mapStateToProps = createStructuredSelector({
    users: fetchUsers(),
    loading : loadingStatus()
});

export default connect(mapStateToProps, mapDispatchToProps)(List);