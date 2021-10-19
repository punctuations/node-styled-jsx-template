import React from 'react';
import {storiesOf} from '@storybook/react';
import Example from '../src/example';
import {constantVariable} from '../src/utils/constants';

storiesOf('Example', module).add('default', () => <Example text={constantVariable} />);
