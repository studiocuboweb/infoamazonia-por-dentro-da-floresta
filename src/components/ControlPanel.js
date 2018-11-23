import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE from './style';
import "styles/mapbox.css";
import {Collapse} from 'react-collapse';
import PropTypes from 'prop-types';

const defaultMapStyle = fromJS(MAP_STYLE);

//const categories = ['labels', 'roads', 'mineriailegal-pt-5owfra', 'parks', 'water', 'background'];
const categories = ['mineriailegal-pt-5owfra','3-mineriailegal-pt-5owfra copy 2'];

// Layer id patterns by category
const layerSelector = {
  // background: /background/,
  // water: /water/,
  // parks: /park/,
  'mineriailegal-pt-5owfra': /mineriailegal-pt-5owfra/,
  '3-mineriailegal-pt-5owfra copy 2': /3-mineriailegal-pt-5owfra copy 2/,
  // roads: /bridge|road|tunnel/,
  // labels: /label|place|poi/
};

const subCategories = {
  'mineriailegal-pt-5owfra': {
    'activo (local. aproximada)':'hsl(267, 42%, 43%)'
    ,'inactivo (local. aproximada)':'hsl(277, 56%, 21%)'
    ,'s.i (local. aproximada)':'hsl(263, 21%, 58%)'
  },
  '3-mineriailegal-pt-5owfra copy 2': {
    'activo (local. aproximada)':'hsl(260, 100%, 73%)'
    ,'inactivo (local. aproximada)':'#492173'
    ,'s.i (local. aproximada)':'#733dd1'    
  }
}

const layerLabels = {
  // background: 'Puntos de Minería Ilegal',
  // water: 'Áreas de Minería Ilegal',
  // parks: 'Legenda 3',
  'mineriailegal-pt-5owfra': 'Puntos de Minería Ilegal',
  '3-mineriailegal-pt-5owfra copy 2': 'Áreas de Minería Ilegal'
  // roads: 'Legenda 5',
  // labels:'Legenda 6'
};

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class StyleControls extends PureComponent {

  static propTypes = {
    isOpened: PropTypes.bool
  };

  static defaultProps = {
    isOpened: false
  };

  constructor(props) {
    super(props);

    this._defaultLayers = defaultMapStyle.get('layers');
    
    this.state = {
      isOpened:this.props.isOpened,
      visibility: {
        // water: true,
        // parks: true,
        'mineriailegal-pt-5owfra': true,
        '3-mineriailegal-pt-5owfra copy 2':true,
        // roads: true,
        // labels: true,
        // background: true
      },
      color: {
        // water: '#DBE2E6',
        // parks: '#E6EAE9',
        'mineriailegal-pt-5owfra': '#c0c0c8',
        '3-mineriailegal-pt-5owfra copy 2':'#311344'
        // roads: '#ffffff',
        // labels: '#78888a',
        // background: '#EBF0F0'
      }
    };

  }

  componentDidMount() {
    this._updateMapStyle(this.state);
  }

  _onColorChange(name, event) {
    const color = {...this.state.color, [name]: event.target.value};
    this.setState({color});
    this._updateMapStyle({...this.state, color});
  }

  _onVisibilityChange(name, event) {
    const visibility = {...this.state.visibility, [name]: event.target.checked};
    this.setState({visibility});
    this._updateMapStyle({...this.state, visibility});
  }

  _updateMapStyle({visibility, color}) {

    const layers = this._defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type]) {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });

    this.props.onChange(defaultMapStyle.set('layers', layers));
  }


  _renderLayerControl(name,render_obj) {
    const {visibility, color, isOpened} = this.state;
    return (
      <div key={name} className="input">
        <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100'}} onClick={render_obj._toggleCollapse.bind(this,isOpened,render_obj)}>{layerLabels[name]}</label> 
        <input type="checkbox" checked={visibility[name]} onChange={this._onVisibilityChange.bind(this, name)} />
        <Collapse isOpened={isOpened}>
          { Object.keys(subCategories[name]).map(function (key) {
              return <div className='mapbox_control-panel_subtitle'><span style={{'backgroundColor':subCategories[name][key]}}></span>{key}</div>
          })}
        </Collapse>
      </div>
    );
  }
  _toggleCollapse(isOpened,render_obj) {
    if (!isOpened) {
      this.setState({isOpened:true})
    } else {
      this.setState({isOpened:false})
    }
    return false;
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div className='fa fa-map mapbox_legend-block'></div>
        <div className='mapbox_legend-align-center'>
          <h5>Legend</h5>
          <a href='#' className='fa fa-window-close mapbox_legend-btn-close'></a>
        </div>
        <hr />
        { //Object.keys(layerLabels).map((name,key,label) => this._renderLayerControl(layerLabels[key],name,label)) 
          categories.map((name) => this._renderLayerControl(name,this)) 
        }
      </Container>
    );
  }
}