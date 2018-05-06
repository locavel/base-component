# @locavel/base-component

[![npm version](https://badge.fury.io/js/@locavel/base-component.svg)](http://badge.fury.io/js/@locavel/base-component)
[![Dependency Status](https://david-dm.org/locavel/base-component.svg)](https://david-dm.org/locavel/base-component)
[![devDependency Status](https://david-dm.org/locavel/base-component/dev-status.svg)](https://david-dm.org/locavel/base-component?type=dev)

Base React component that provides automatically bind all instance methods.

## Installation

```
npm install --save @locavel/base-component
```

## Usage

```
import * as React from 'react';
import BaseComponent from '@locavel/base-component';

export default class MyComponent extends BaseComponent {
  getFoo () {
    return this.state.foo;
  }

  render () {
    return (
      <div>
        {this.getFoo()}
      </div>
    )
  }
}
```

## License

MIT © [Locavel](https://github.com/locavel)

