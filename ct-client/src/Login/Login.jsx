import React from 'react';
import {
    Icon,
    Button,
    Form,
    Input,
    Segment,
    Grid
} from 'semantic-ui-react';

const Login = ({
    user,
    handleInputChange,
    handleLoginClick
}) => {

    return (
        <Grid centered columns={4}>
            <Grid.Column>
                <Segment raised padded='very'>
                    <Form>
                        <Form.Field required error={user.email === ""}>
                            <label floated='left'>Email</label>
                            <Input
                                name="email"
                                type="email"
                                placeholder='email'
                                value={user.email}
                                onChange={handleInputChange}/>
                        </Form.Field>
                        <Form.Field size='huge' required error={user.password === ""}>
                            <label>Password</label>
                            <Input
                                name="password"
                                type="password"
                                placeholder='Password'
                                value={user.password}
                                onChange={handleInputChange}/>
                        </Form.Field>
                    </Form>
                    <Segment basic textAlign='center'>
                        <Button
                            fluid
                            size='huge'
                            color='green'
                            inverted
                            disabled={!user.email || !user.password}
                            onClick={handleLoginClick}>
                            <Icon name='checkmark'/>
                            Login
                        </Button>
                    </Segment>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
export default Login