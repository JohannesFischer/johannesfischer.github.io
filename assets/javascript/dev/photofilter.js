var HelloWorld = React.createClass({
  displayName: 'HelloWorld',
  
  getInitialState: function() {
    return {
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      saturate: 100,
      sepia: 0
    };
  },
  
  handleChange: function(event) {
    console.log(event.target.value);
    var key = event.target.name;
    var state = {};
    state[key] = event.target.value;
    this.setState(state);
  },
  
  render: function() {
    var imgStyle = {
      filter: 'brightness(' + this.state.brightness + '%) ' +
              'contrast(' + this.state.contrast + '%)' +
              'grayscale(' + this.state.grayscale + '%)' +
              'hue-rotate(' + this.state.hueRotate + 'deg) ' +
              'invert(' + this.state.invert + '%)' +
              'saturate(' + this.state.saturate + '%)' +
              'sepia(' + this.state.sepia + '%)'
    };
    
    return (
      React.createElement('div',null,
        React.createElement('img', {
          style: imgStyle,
          src: '/assets/images/photofilter/image_01.jpg'
        }),
        // brightness
        React.createElement('label', null, 'Brightness'),
        React.createElement('input', {
          min: 0,
          max: 200,
          name: 'brightness',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.brightness
        }),
        // contrast
        React.createElement('label', null, 'Contrast'),
        React.createElement('input', {
          min: 0,
          max: 200,
          name: 'contrast',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.contrast
        }),
        // grayscale
        React.createElement('label', null, 'Grayscale'),
        React.createElement('input', {
          min: 0,
          max: 100,
          name: 'grayscale',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.grayscale
        }),
        // hue-rotate
        React.createElement('label', null, 'Hue Rotate'),
        React.createElement('input', {
          min: 0,
          max: 360,
          name: 'hueRotate',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.hueRotate
        }),
        // invert
        React.createElement('label', null, 'Invert'),
        React.createElement('input', {
          min: 0,
          max: 100,
          name: 'invert',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.invert
        }),
        // saturate
        React.createElement('label', null, 'Saturation'),
        React.createElement('input', {
          min: 0,
          max: 200,
          name: 'saturate',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.saturate
        }),
        // sepaia
        React.createElement('label', null, 'Sepia'),
        React.createElement('input', {
          min: 0,
          max: 100,
          name: 'sepia',
          onChange: this.handleChange,
          type: 'range',
          value: this.state.sepia
        })
      )
    );
  }
});

React.render(
  React.createElement(HelloWorld, {name: "World"}),
  document.getElementById('Content')
);