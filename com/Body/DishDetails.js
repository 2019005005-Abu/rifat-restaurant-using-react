import React from 'react';
import {
Card,
CardImg,
CardImgOverlay,
CardBody,
CardTitle,
CardText
} from 'reactstrap';
import Loadcom from './Loadcom';
 export default function DishDetails(props){
     console.log(props);
    return(
          <div>
            <Card style={{margin:'20px'}}>
               <CardBody>
                   <CardImg top 
                   src={props.dish.image}
                   alt={props.dish.name}
                   />
                <CardText>
               {props.dish.name}
                </CardText>
        
                 <CardText>
               {props.dish.description}
               </CardText>
                 <CardText>
               Price:{props.dish.price}/-
               </CardText>
              </CardBody>
               <hr/>
               <Loadcom 
               comments={props.comments}
                />
           </Card>
           </div>  
        )
}