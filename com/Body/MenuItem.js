import React from 'react';
import {
Card,
CardImg,
CardImgOverlay,
CardBody,
CardTitle,
CardText
} from 'reactstrap';

 export default function MenuItem(props){
    
    return(
          <div>
            <Card style={{margin:'20px',border:'none',float:'left'}}>
               <CardBody>
                   <CardImg 
                   src={props.dish.image}
                   alt={props.dish.name}
                   style={{opacity:'0.5',width:'500px'}}
                   />
             <CardImgOverlay>
            <CardTitle 
        onClick={()=>
        props.OnDishSelected(props.dish)}
        style={{cursor:'pointer'}}>
        {props.dish.name}
             </CardTitle>
             </CardImgOverlay>
              </CardBody>
           </Card>
           </div>  
        )
}