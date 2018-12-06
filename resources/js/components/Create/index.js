import React from 'react';
import 'babel-polyfill';
import { createUser, getUserAction } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { successMessage, selectedUser } from './selector';
import R from 'ramda';

class Create extends React.Component {

    state = {
        id: '',
        name: '',   
        email: '',
        password: '',
    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            const userId = this.props.match.params.id;
            this.props.getUser(userId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user !== undefined) {
            this.setState({
                ...this.state,
                id : nextProps.user.id,
                name : nextProps.user.name,
                email : nextProps.user.email,
            });
        }
    }

    saveUsers = (e) => {
        e.preventDefault();
        this.props.save(this.state);
        this.setState({
            id: '',
            name: '',
            email: '',
            password: '',
        });
        this.refs.name.focus();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        const selectMsg = this.props.msg ? <div className="alert alert-info">{ this.props.msg }</div> : ''

        return (
            <div className="container">
                { selectMsg }
                <div className="card">
                    <div className="card-header bg-dark text-white">Create User</div>
                    <div className="card-body">
                        <form onSubmit={this.saveUsers} >
                            <div className="form-group">
                                <label htmlFor="email">Name :</label>
                                <input type="text" className="form-control" value={this.state.name}
                                    id="name" onChange={this.handleChange} ref="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email :</label>
                                <input type="text" className="form-control" value={this.state.email}
                                    id="email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Password :</label>
                                <input type="password" className="form-control" value={this.state.password}
                                    id="password" onChange={this.handleChange} />
                            </div>
                            <div>
                                <button type="submit"
                                    className="btn btn-danger">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        save: (QueryString) => dispatch(createUser(QueryString)),
        getUser: (QueryString) => dispatch(getUserAction(QueryString)),
    };
}

const mapStateToProps = createStructuredSelector({
    user: selectedUser(),
    msg: successMessage()
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);