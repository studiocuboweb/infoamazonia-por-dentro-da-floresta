import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE from './style';
import "styles/mapbox.css";
import LegendCollapse from './LegendCollapse';
import {Collapse} from 'react-collapse';

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

  constructor(props) {
    super(props);

    this._defaultLayers = defaultMapStyle.get('layers');
    
    this.state = {
      displayLegendBG: {'background-color':'none'}, 
      displayLegend: {'display':'none'},
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

  _onVisibilityChange(name,target,parent_scope) {
    const visibility = {...parent_scope.state.visibility, [name]: target};
    parent_scope.setState({visibility});
    parent_scope._updateMapStyle({...parent_scope.state, visibility});
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
        <div>
        <LegendCollapse 
          name={name} 
          label={layerLabels[name]} 
          visibility={visibility[name]}
          subCategories={{subCategories}}
          onVisibilityChange={this._onVisibilityChange}
          parentScope={this}
        />
        </div>
    );
  }
  _toggleLegend() {
    if (this.state.displayLegend['display'] == 'none') {
      this.setState({displayLegend: {'display':'block'}})
      this.setState({displayLegendBG: {'background-color':'#fff'}})
    } else {
      this.setState({displayLegend: {'display':'none'}})
      this.setState({displayLegendBG: {'background-color':'transparent'}})
    }
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div style={this.state.displayLegendBG} className='control-panel-padding'>
          <button className='fa fa-map mapbox_legend-ico mapbox_legend-block mapbox_legend-button' style={{'cursor':'pointer'}} onClick={this._toggleLegend.bind(this)}></button>
          <div style={this.state.displayLegend}>
            <div className='mapbox_legend-align-center'>
              <h5>Legend</h5>
              <a href='#' className='fa fa-window-close mapbox_legend-btn-close' onClick={this._toggleLegend.bind(this)}></a>
            </div>
            <hr />
            { //Object.keys(layerLabels).map((name,key,label) => this._renderLayerControl(layerLabels[key],name,label)) 
              categories.map((name) => this._renderLayerControl(name,this)) 
            }
          </div>
        </div>
      </Container>
    );
  }
}