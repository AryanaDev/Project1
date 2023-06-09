import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const { showFocusButton, focusInput, customRef } = this.props;

    return (
      <div>
        <input type="text" ref={customRef} />
        {
          showFocusButton ? <button type="button" onClick={focusInput}>
            My Button
          </button> : null
        }

      </div>
    );
  }
}
