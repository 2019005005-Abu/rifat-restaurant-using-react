import React from 'react';
import {CardText} from 'reactstrap';
import dateFormat, { masks } from "dateformat";
export default function Loadcom(props){
    return(
        props.comments.map(comment=>{
            return(
                 <div key={comment.id}>
                  <CardText>
                 {comment.author}
                  </CardText>
                  <CardText>
                  {comment.comment}
                </CardText>
                  <CardText>
                {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                  
                </CardText>
                 </div>
            )
        })
    )
}