import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from '../src/components/HelloWorld';

storiesOf('Hello World', module)
  .add('Red Background', () => <HelloWorld backgroundHex="red" />)
  .add('Blue Background', () => <HelloWorld backgroundHex="blue" />);
