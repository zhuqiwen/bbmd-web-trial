import React from 'react';
import ModelFitPlot from './ModelFitPlot';




class LowDoseExtrapolation extends React.Component{

    componentWillMount(){
        this.props.onMount(this.props.object);
    }

    componentDidUpdate(){
        this.props.onMount(this.props.object);
    }

    render(){
        let object = this.props.object;
        let statistics = object.stats_for_rfd;

        console.log('lowdoseextrapolation.js -> render()');
        console.log(object);
        return (
            <div>
                <div>
                    display low dose extrapolation results here <br/>
                    this is {object.name}
                </div>
                <div>
                    <table>
                      <tr>
                          <th>1%</th>
                          <td>{statistics[1]}</td>
                      </tr>
                        <tr>
                            <th>2.5%</th>
                            <td>{statistics[2.5]}</td>
                        </tr>
                        <tr>
                        <th>5%</th>
                        <td>{statistics[5]}</td>
                            </tr>
                        <tr>
                        <th>10%</th>
                        <td>{statistics[10]}</td>
                            </tr>
                        <tr>
                        <th>25%</th>
                        <td>{statistics[25]}</td>
                            </tr>
                        <tr>
                        <th>50%</th>
                        <td>{statistics[50]}</td>
                            </tr>
                        <tr>
                        <th>75%</th>
                        <td>{statistics[75]}</td>
                            </tr>
                        <tr>
                        <th>90%</th>
                        <td>{statistics[90]}</td>
                            </tr>
                        <tr>
                        <th>95%</th>
                        <td>{statistics[95]}</td>
                            </tr>
                        <tr>
                        <th>97.5%</th>
                        <td>{statistics[97.5]}</td>
                            </tr>
                        <tr>
                        <th>99%</th>
                        <td>{statistics[99]}</td>
                      </tr>
                    </table>
                </div>
                <ModelFitPlot plot_json={object.plot_json} />

            </div>



        );
    }
}

export default LowDoseExtrapolation