import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Checkbox } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';
import { reqAuth } from '../redux/actions';

const ModalComp = ({setOpen1, open1, type}) => {
  
  const dispatch = useDispatch()
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: ""
	})
  
	const handleSub = () => {
		if((user.email, user.password, user.name)=== ""){
			alert('err')
		}else{
      console.log('www')
			dispatch(reqAuth(user))
		}
	}
  return (
    <Modal
    onClose={() => setOpen1(false)}
    open={open1}    
  >
    <Modal.Content>
    {type==="signup"? (

      <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
      </Form.Field>
      <Form.Field>
        <Checkbox  label="I agree to the Terms and Conditions" />
      </Form.Field>      
      </Form>

    ):(

      <Form>        
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
        </Form.Field>            
      </Form>
      
    )}
    </Modal.Content>
    <Modal.Actions>
      <Button color="black" onClick={() => setOpen1(false)}>
        Cancle
      </Button>

      <Button
         content ={
          type==='signin'? "Log in" : "Sign Up"
         } 
        // content="Log in"
        labelPosition="right"
        icon="checkmark"
        onClick={() => {
          setOpen1(false)
          // type==='signin'? handleSub():handleSub()
          handleSub()
        }}
        positive
      />
    </Modal.Actions>
  </Modal>
  );
};

export default ModalComp;