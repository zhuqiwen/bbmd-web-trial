import React from 'react';




class UFsEdit_ZQW extends React.Component{

    handleCreateClick() {
        // const { dispatch } = this.props;
        // // dispatch(changeSelectedBmd(null));
    }

    renderCreateButton(){
        // let className = (this.props.bmds.selectedObjectId === null) ? 'active' : '';
        let styles = {cursor: 'pointer'};
        return (
            <li className={'active'}>
                <a style={styles}
                   onClick={this.handleCreateClick.bind(this)}>
                    <i className='fa fa-plus-circle'></i> Add New
                </a>
            </li>
        );
    }

    render(){
        return (
            <div className='row-fluid'>
                <div className='col-sm-2'>
                    <ul className='nav nav-pills nav-stacked'>
                        {/*{objects.map(this.renderPills.bind(this))}*/}
                        {this.renderCreateButton()}
                    </ul>
                </div>
                <div className='col-sm-10'>
                    <div className='tab-content'>
                        <form>
                            <div>
                                <label>BMD Estimates</label>
                                <select
                                    className="form-control"
                                    name="name">
                                    <option>slug1</option>
                                    <option>slug2</option>
                                    <option>slug3</option>
                                    <option>slug4</option>

                                </select>
                            </div>
                            <hr />


                            <div className="form-group">
                                <fieldset>
                                    <legend>Animal to Human UFa</legend>
                                        <div className="col-md-6">
                                            <label>meanLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>stdLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>Human Variability UFh</legend>
                                        <div className="col-md-6">
                                            <label>meanLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>stdLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>Subchronic to Chronic UFs</legend>
                                        <div className="col-md-6">
                                            <label>meanLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>stdLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>Dataset UFd</legend>
                                        <div className="col-md-6">
                                            <label>meanLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                        <div className="col-md-6">
                                            <label>stdLog-UFa</label>
                                            <input
                                            className="form-control"
                                            name="name"
                                            type="number">
                                            </input>
                                            <p className="help-block"></p>
                                        </div>
                                </fieldset>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default UFsEdit_ZQW;