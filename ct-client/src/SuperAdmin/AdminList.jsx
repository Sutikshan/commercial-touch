import React from 'react';
import {Button, Segment} from 'semantic-ui-react'

const AdminList = ({adminList, addNewAdminClick}) => {
    return (
        <Segment
            basic
            textAlign='right'
            style={{
            paddingRight: '5%'
        }}>
            <Button
                label='Add Admin'
                icon='add user'
                size='massive'
                color='red'
                onClick={addNewAdminClick}/>
        </Segment>
    );
}

export default AdminList;