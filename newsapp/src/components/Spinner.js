import React, { Component } from 'react'
import loading from "./loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center d-flex justify-content-center mt-5">
        <img src={loading} alt="loading" style={{width: "3rem"}}/>
      </div>
    )
  }
}

export default Spinner
