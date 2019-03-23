import React from "react";

import {ProviderProps} from './../redux/index'

import Index2 from './index2'

function main() {
  return (
    <ProviderProps>
      <div className="Main">
        123
        <Index2 />
      </div>
    </ProviderProps>
  )
}

export default main;