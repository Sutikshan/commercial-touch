import React from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  Grid,
  Segment
} from 'semantic-ui-react';

const RegisterAdmin = ({user, confirmPassword, handleInputChange, handleCpasswordChange, handleRegister}) => {
    return (
      <Grid centered columns={4}>
        <Grid.Column>
          <Segment raised padded='very'>
            <Form>
              <Form.Field required error={user.body.name === ""}>
                <label>Name</label>
                <Input
                  name="name"
                  type="text"
                  placeholder='name'
                  value={user.body.name}
                  onChange={handleInputChange}/>
              </Form.Field>
              <Form.Field required error={user.body.email === ""}>
                <label>Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder='email'
                  value={user.body.email}
                  onChange={handleInputChange}/>
              </Form.Field>
              <Form.Field required error={!user.body.mobile}>
                <label>Mobile number</label>
                <Input
                  name="mobile"
                  type="number"
                  placeholder='mobile number'
                  value={user.body.mobile}
                  onChange={handleInputChange}/>
              </Form.Field>
              <Form.Field required error={user.body.password === ""}>
                <label>Password</label>
                <Input
                  name="password"
                  type="password"
                  placeholder='password'
                  value={user.body.password}
                  onChange={handleInputChange}/>
              </Form.Field>
              <Form.Field
                required
                error={confirmPassword === "" || user.body.password !== confirmPassword}>
                <label>confirm password</label>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder='confirm password'
                  value={confirmPassword}
                  onChange={handleCpasswordChange}/>
              </Form.Field>
            </Form>
            <Segment basic textAlign='center'>
              <Button fluid size='huge' color='green' inverted onClick={handleRegister}>
                <Icon name='checkmark'/>
                Register
              </Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    );
}

export default RegisterAdmin;
