import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CustomersActions from '../components/CustomersActions';
import CustomerList from '../components/CustomersList';
import AppFrame from '../components/AppFrame';

const customers =[
    {
     "dni":"21000000",
     "name":"Juan Perez",
     "age":37
    },
    {
     "dni":"30000000",
     "name":"Otro",
     "age":35
    },
    {
     "dni":"33000000",
     "name":"Luiz Martinez",
     "age":32
    }
];

 class CustomersContainer extends Component {
    
    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }
    renderBody = customers =>(
        <div>
        <CustomerList customers= {customers} urlPath={"customer/"}></CustomerList>
        <CustomersActions>
            <button onClick={this.handleAddNew}> Nuevo Cliente</button>
        </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header = {"Listado de clientes"} body={this.renderBody(customers)}></AppFrame>
            </div>
        )
    }


}



export default withRouter(CustomersContainer);