import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';
import {
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
//validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.state = {
            isModalOpen: false
        };
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmitComment(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render() {
        return(
        <div>
            <Button outline onClick={this.toggleModal}><i className="fa fa-lg fa-pen "></i>Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <input type="number" model=".rating" id="rating" name="rating"
                                        className="form-control" />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="yourname">Your Name</Label>
                            <Control.text model=".yourname" id="yourname" name="yourname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".yourname"
                                show="touched"
                                messages={{
                                    
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                            
                        </Row>
                        <Row>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                        </Row>
                        <Button type="submit" value="submit" color="danger">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>)
    }


}
export default CommentForm