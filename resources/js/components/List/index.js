import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fetchUsers, loadingStatus } from './selector';
import { listUsers, deleteUser } from './actions';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

class List extends React.Component {

    state = {
      page: 1,
      hasMoreItems : true,
      lastPage : 3,
      perPage: 10,
      total : 30
    }

    componentWillMount() {
        this.props.fetchAppUsers();
    }

    handleDelete(id) {
        this.props.deleteUser(id);
    }

    componentWillReceiveProps(nextProps) {
        const listSize = nextProps.users.size;
        
        if(listSize > 0) {

            this.setState({
                total : listSize,
                perPage : 10,
                page : 1,
                lastPage : 8
            });
        }
    }

    getMoreUsers = (pageS) => {
        const lastPage = this.state.lastPage;
        const page = this.state.page;
        const nextPage = parseInt(page, 10) + 1;
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