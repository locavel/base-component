import * as React from 'react';

export default class BaseComponent extends React.Component {
  constructor (props: any, context?: any) {
    super(props, context);
    this.autoBind();
  }

  private autoBind () {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter((prop) => typeof (this as any)[prop] === 'function')
      .forEach((method) => {
        (this as any)[method] = (this as any)[method].bind(this);
      });
  }
}
