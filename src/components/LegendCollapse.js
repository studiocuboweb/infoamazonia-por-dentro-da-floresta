import React from 'react';
import {Collapse} from 'react-collapse';


class LegendCollapse extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler = (name,event) => {
        this.props.onVisibilityChange(name,event.target.checked,this.props.parentScope)
    }

    render() {
        const name = this.props.name;
        const label = this.props.label;
        const visibility = this.props.visibility;
        const subcategories = this.props.subCategories;
        return (
            <div key={name} className="input">
                <input type="checkbox" checked={visibility} onChange={this._onChangeHandler.bind(this,name)} />
                <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>{label}</label>
                <span className={this.state.arrowClass} style={{marginLeft:'0.5rem',color:'#333'}}></span>
                <Collapse isOpened={this.state.collapse}>
                { Object.keys(subcategories.subCategories[name]).map(function (key) {
                    return <div className='mapbox_control-panel_subtitle'><span style={{'backgroundColor':subcategories.subCategories[name][key]}}></span>{key}</div>
                })}
                </Collapse>
            </div>
        );
      }

}

export default LegendCollapse