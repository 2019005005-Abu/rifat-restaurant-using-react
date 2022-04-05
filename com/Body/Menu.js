import React,{Component} from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem.js';
import DishDetails from './DishDetails.js';
import COMMENTS from '../../data/comments.js';

import {
CardColumns,
Modal,
ModalBody,
ModalFooter,
Button
} from 'reactstrap';

export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            selectedDish:null,
            modalOpen:false,
        
        }
        
    }
//function-1
OnDishSelected=dish=>{
console.log('clicked')
console.log(dish);  
this.setState({selectedDish:dish})
this.ToggleModal();
}
//function-2
ToggleModal=()=>{
this.setState({modalOpen:!this.state.modalOpen})
}
    render(){
        document.title='Menu'
        let menu=this.state.dishes.map(item=>{
             return(
                <MenuItem 
                 dish={item}
                 key={item.id}
                 OnDishSelected={this.OnDishSelected}
                 />
             )
             
        })
let dishdetails=null;
if(this.state.selectedDish !=null){
const comments=this.state.comments.filter(comment=>{
return comment.dishId===this.state.selectedDish.id
})
   dishdetails= <DishDetails 
    dish={this.state.selectedDish}
    comments={comments}
    />
}
        return(
            <div>
              <div className='container'>
                <div className='row'>
                 <CardColumns>
                     {menu}
                 </CardColumns>
             <Modal 
            isOpen={this.state.modalOpen}
            onClick={this.ToggleModal}
            >
             <ModalBody>
            {dishdetails}
            </ModalBody>
            <ModalFooter>
             <Button 
            className='secondary'
            onClick={this.ToggleModal}
            >
             Close
            </Button>
            </ModalFooter>
            </Modal>
            </div>
             </div>
         </div>
     
        )
    }
}