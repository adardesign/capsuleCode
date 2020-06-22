import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createRoute as create, readRoutes as read, updateRoute as update, deleteRoute as delete_ } from './actions'
import CrudViewer from './viewer'

// TODO:
// sort (semi) server side..

export const Routes = (props) => {

    const { isLoading, data, error } = props;
    const { create, read, update, delete_ } = props;
    console.log(data)
    useEffect(() => {
        read()
        return () => {
        }
    }, [])

    if (isLoading) return <div>Loading</div>
    if (error) return <div>Error</div>
    return (
        <CrudViewer data={data} create={create} read={read} update={update} delete_={delete_} />
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.routes.isLoading,
    data: state.routes.data,
    error: state.routes.error
})



function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            create,
            read,
            update,
            delete_
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes)
