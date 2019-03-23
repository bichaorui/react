import React from "react";

import {ProviderProps} from './../redux/index'

import Index2 from './index2'

function main() {
  return (
    <ProviderProps>
      <div>
        123
        <Index2 />
      </div>
    </ProviderProps>
  )
}

export default main;