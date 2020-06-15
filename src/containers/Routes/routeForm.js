import React, { useState, useEffect } from 'react'

export default function RouteForm({ onSave, onDelete, data }) {
    const [state, setState] = useState(data);
    useEffect(() => {
        setState(data);
    }, [data])

    if (!data || !Object.keys(state).length) return null;
    const { _id } = state;

    console.log(data)
    const onChange = ({ target }) => {
        // if valid
        const value = target.value;
        const key = target.name;
        setState(state => {
            return {
                ...state,
                [key]: value
            }
        })
    }

    const deleteRecord = () => {
        onDelete(state._id)
        setTimeout(function () {
            setState({});
        }, 1000);
    }
    const saveRecord = () => {
        onSave(state)
    }

    return (
        <form>
            <div className="card">
                {_id && (<div className="card-header">
                    <h3 className="mb-1">
                        Route Id: {_id.slice(_id.length - 5)}
                        {!_id && ('create a route')}
                    </h3>
                </div>)}
                {['date', 'origin', 'destination', 'airline', 'aircraft', 'duration'].map(prop => {
                    return (
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">{prop}</span>
                                </div>
                                <input onChange={onChange} type="text" name={prop} value={state[prop]} className="form-control" />
                            </div>
                        </div>
                    )
                })}



                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="status" />
                    <label className="custom-control-label" htmlFor="customSwitch1">Staus</label>
                </div>

            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-2"> <button type="submit" className="btn btn-outline-info mb-2" onClick={saveRecord}>update</button></div>
                    {onDelete && <div className="col-2"><button type="button" className="btn btn-outline-danger" onClick={deleteRecord}>Delete</button></div>}
                </div>
            </div>
        </form>
    )
}
