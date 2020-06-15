import React, { useState } from 'react'
import DateFormat from '../../components/atoms/dateFormat';
import './styles.css'
import RouteForm from './routeForm';
import schema from './scheme'
function CrudViewer({ data, create, read, update, delete_ }) {

    const [selected, setSelected] = useState();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const selectNode = ({ target }) => {
        setSelected(data.find(node => node._id === target.closest("li").dataset.id));
    }

    const toggleShowCreateModal = () => {
        setShowCreateModal(!showCreateModal);
    }


    const onSave = (data) => {
        [data._id ? 'update' : 'create'](data);
    }

    const deleteRecord = () => {
        delete_(selected._id);
    }


    return (
        <>
            <div className="container">
                <button type="button" className="showCreateModal btn btn-primary" onClick={toggleShowCreateModal}>Create</button>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <ul className="list-group">
                            {data.map(({ _id, date, origin, destination }) => {
                                return (
                                    <li className={`list-group-item ${selected && selected._id === _id ? 'active' : ''}`} key={_id} data-id={_id} onClick={selectNode}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Route Id: {_id.slice(_id.length - 5)}</h5>
                                            <small className="text-muted"><DateFormat date={date} format="M/DD" /></small>
                                        </div>
                                        <div className="mb-1">
                                            <span className="badge badge-primary">{origin}</span>{' '} ➡️ {' '}
                                            <span className="badge badge-primary">{destination}</span>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        {selected && (
                            <RouteForm onSave={onSave} onDelete={deleteRecord} data={selected} />
                        )}
                        {!selected && (
                            <div>
                                non selected <br />
                                <button type="button" className="btn btn-primary" onClick={toggleShowCreateModal}>Create</button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showCreateModal && <div className="modal" role="dialog" id="staticBackdrop" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create a Route</h5>
                            <button type="button" onClick={toggleShowCreateModal} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <RouteForm onSave={onSave} data={schema} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={toggleShowCreateModal}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CrudViewer
