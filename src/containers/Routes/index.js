import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createRoute, readRoutes, updateRoute, deleteRoute } from './actions'
import CrudViewer from './viewer'

// TODO:
// sort (semi) server side..

export const Routes = (props) => {

    const { isLoading, data, error } = props;
    const { create, read, update, delete_ } = props;
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



const mapDispatchToProps = (dispatch) => {
    return {
        create: (data) => {
            dispatch(createRoute(data))
        },
        read: () => {
            dispatch(readRoutes())
        },
        update: (data) => {
            updateRoute()
        },
        delete_: (id) => {
            dispatch(deleteRoute(id))
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes)
