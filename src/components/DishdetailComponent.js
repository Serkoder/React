import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import moment from 'moment';



class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishDetail: this.props.dishdetail
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if (comments == null) {
            return (
            <div></div>
            );
        }
        const cmt = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {moment(comment.date).format('DD-MM-YYYY')}</p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmt}
                </ul>
            </div>
        )
    }


    render(){
        const dish = this.props.dish 
        if (dish == null) {
            return (<div></div>);
        }
        const dishInfo = this.renderDish(dish);
        const dishCmt = this.renderComments(dish.comments);
        return (
            <div className='row'>
                {dishInfo} {dishCmt}
            </div>
        )
    }

}

export default DishDetail;