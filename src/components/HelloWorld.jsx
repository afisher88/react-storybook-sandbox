import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    const { backgroundHex } = this.props;

    return (
      <div style={{ background: backgroundHex || '#fff' }}>Hello World!</div>
    );
  }
}
