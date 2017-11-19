import React from 'react';
import { Button, Segment, Table } from 'semantic-ui-react'

const AdminList = ({adminList, addNewAdminClick}) => {
    return (
        <div>
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
            <Segment
                basic
            >
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Name </Table.HeaderCell>
                        <Table.HeaderCell> Mobile </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  {
                      adminList.map(admin => (
                        <Table.Row key={admin.mobile}>
                          <Table.Cell>
                            {admin.name}
                          </Table.Cell>
                          <Table.Cell>
                            {admin.mobile}
                          </Table.Cell>
                        </Table.Row>
                      ))
                    }
                  </Table.Body>
                </Table>
            </Segment>
        </div>
    );
}

export default AdminList;