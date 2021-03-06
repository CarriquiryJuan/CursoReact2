import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';


 class CustomersContainer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }
    
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
    )

    render() {
        return (
            <div>
                <AppFrame header = {"Listado de clientes"} body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        )
    }


}

CustomersContainer.propTypes ={
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
}

CustomersContainer.defaultProps ={
     customers : [    ]    
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));