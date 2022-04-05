import React,{
    Component
} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap';

export default class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            telephonenumber:'',
            email:'',
            agree:false,
            contactType:'Tel',
            message:'',
            
            
        }
this.handleInputChange=this.handleInputChange.
bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
    }
    
handleInputChange=event=>{
const value=event.target.type==='checkbox' ?
event.target.checked:event.target.value;
console.log(event.target.name);
this.setState({
    [name]:value
      })
    }

handleSubmit=event=>{
console.log(this.state);
event.preventDefault();
}


    render(){
        document.title='Contact'
    return(
        <div className='container'>
        <div className='row row-content'
        style={{paddingLeft:'20px',
        textAlign:'left'}}>
         <div className='col-12'>
          <h3>Send US Your Feedback</h3>
        </div>
         <div className='col-12 col-md-7'>
          <Form onSubmit={this.handleSubmit}>
           
          <FormGroup row>
          <Label 
           htmlFor='firstname'
           md={2}>
           First Name
           </Label>
           <Col md={10}>
           <Input 
           type='text'
           name='firstname'
           placeholder='Enter Your First Name'
           value={this.state.firstname}
           onChange={this.handleInputChange}
           />
           </Col>
          </FormGroup>
        
         <FormGroup row>
          <Label 
           htmlFor='lastname'
           md={2}>
           Last Name
           </Label>
           <Col md={10}>
           <Input 
           type='text'
           name='lastname'
           placeholder='Enter Your Last Name'
           value={this.state.lastname}
           onChange={this.handleInputChange}
           />
           </Col>
          </FormGroup>
        
          <FormGroup row>
          <Label 
           htmlFor='telnum'
           md={2}>
           Mobile Number
           </Label>
           <Col md={10}>
           <Input 
           type='tel'
           name='telephonenumber'
           placeholder='Enter Your Number'
           value={this.state.telephonenumber}
           onChange={this.handleInputChange}
           />
           </Col>
          </FormGroup>
        
          <FormGroup row>
          <Label 
           htmlFor='email'
           md={2}>
           Enter Your Email
           </Label>
           <Col md={10}>
           <Input 
           type='email'
           name='email'
           placeholder='Enter Your Email'
           value={this.state.email}
           onChange={this.handleInputChange}
           />
           </Col>
          </FormGroup>
        
        <FormGroup row>
           <Col md={{size:6,offset:2}}>
            <FormGroup check>
            <Label check>
              <Input type='checkbox'
              name='agree'
              checked={this.state.agree}
             onChange={this.handleInputChange}
             />
             <strong>
             May we contact with you?</strong>
            </Label>
           </FormGroup>
           </Col>
           <Col md={{size:3,offset:2}}> 
             <Input type='select' name='contactType'
              value={this.state.contactType}
            onChange={this.handleInputChange}>
              <option>Telephone</option>
              <option>Email</option>
             </Input>
           </Col>
          </FormGroup>
        
        
          <FormGroup row>
          <Label 
           htmlFor='message'
           md={2}>
            Your Feedback
           </Label>
           <Col md={10}>
           <Input 
           type='textarea'
           name='message'
           placeholder='Enter You Feedback'
           value={this.state.message}
           onChange={this.handleInputChange}
           style={{width:'300px',
           height:'300px'}}
           />
           </Col>
          </FormGroup>
        
           <FormGroup>
            <Col md={{size:10,offset:2}}>
             <Button 
            type='submit'
             color='primary'>
            Send back
           </Button>
           </Col>
          </FormGroup>
         </Form>
    </div>
  </div>
</div>
    )
  }
}