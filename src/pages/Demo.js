import React, { Component } from 'react';

import { getPopups } from '../lib/popup'

import './Demo.css'

export class Demo extends Component {
  render() {
    const popups = getPopups()

    /**
     * Step 1: Render the first popup of popups array in an overlay
     */
    return <div />
  }
}
