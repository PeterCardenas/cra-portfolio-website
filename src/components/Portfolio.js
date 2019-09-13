/* eslint-disable jsx-a11y/alt-text */
import React, {
    Component
} from 'react';
export default class Porfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "test",
            description: "test",
            longDescription: []
        };
    }

    changeModal(params) {
        let {
            name,
            description,
            longDescription
        } = params;
        this.setState({
            name: name,
            description: description,
            longDescription: longDescription
        });
    }

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id = "portfolio">
                <div className = "row">
                    <div className = "twelve columns collapsed">
                        <h1> Check Out Some of My Works. </h1>
                        <div id = "portfolio-wrapper" className = "bgrid-quarters s-bgrid-thirds cf">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item, index) => {
                                    return (
                                        <div className = "columns portfolio-item" key = {index}>
                                            <div className = "item-wrap">
                                                <a href = "#portfolioModal" onClick = {() => this.changeModal({name: item.name, description: item.description, longDescription: item.longDescription})}>
                                                    <img src={`${item.imgUrl}`} className="item-img"/>
                                                    <div className = "overlay">
                                                        <div className = "portfolio-item-meta">
                                                            <h5> {item.name} </h5>
                                                            <p> {item.description} </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div id = "portfolioModal" className = "popup-modal mfp-hide">
                    <i className = "fa fa-times close" aria-hidden="true"></i>
                    <div className = "description-box">
                        <h4> {this.state.name} </h4>
                        <p> {this.state.description} </p>
                        <ul className = "description-list dashed">
                            {
                                this.state.longDescription && this.state.longDescription.map((desc, index) => {
                                    return (
                                        <li key = {index}>
                                            <em> {desc} </em>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}