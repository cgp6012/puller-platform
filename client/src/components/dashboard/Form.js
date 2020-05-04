/*import React, { Component } from 'react';
import { database } from '../../firebase';
import _ from 'lodash';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            phone: '',
            assign: '',
            posts:{}
        };
        //bind
        this.onInputChange = this.onInputChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    // lifecycle
    componentDidMount(){
        database.on('value', snapshot => {
            this.setState({
                posts: snapshot.val()
            });
        });
    }
    
    // render accounts from firebase
    renderPosts() {
        return _.map(this.state.posts, (post,key) => {
            return (
            <tr key={key}>
                <td>{post.username}</td>
                <td>{post.phone}</td>
                <td>{post.assign}</td>
            </tr>
            )
        });
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const post = {
            username: this.state.username,
            phone: this.state.phone,
            assign: this.state.assign
        };
        database.push(post);
        this.setState({
            username: '',
            phone: '',
            assign: ''
        });
    }

    render() {
        return(
            <div className="container">
                <Card>
                <Card.Body></Card.Body>
            </Card>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <input 
                        value={this.state.username}
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={this.onInputChange} 
                        ref="username" 
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input 
                        value={this.state.phone}
                        type="text" 
                        name="phone" 
                        placeholder="Phone Number" 
                        onChange={this.onInputChange} 
                        ref="phone" 
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input 
                        value={this.state.assign}
                        type="text" 
                        name="assign" 
                        placeholder="Assign User" 
                        onChange={this.onInputChange} 
                        ref="assign" 
                        className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Add Account</button>
                </form>
                <br />
                <Table responsive striped>
                    <thaed>
                        <tr>
                            <th>Username</th>
                            <th>Phone Number</th>
                            <th>Assigned</th>
                        </tr>
                    </thaed>
                    <tbody>
                       <tr>{this.renderPosts()}</tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Form; */