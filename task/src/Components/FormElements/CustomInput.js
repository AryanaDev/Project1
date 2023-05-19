import React, { Component, forwardRef } from "react";

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  }

  render() {
    const { showFocusButton } = this.props;

    if (showFocusButton ) {
      return (
        <div>
          <input type="text" ref={this.inputRef} />
          <button type="button" onClick={this.focusInput}>
            My Button
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <input type="text" ref={this.inputRef} />
        </div>
      );
    }
  }
}

export default forwardRef((props, ref) => (
  <CustomInput forwardedRef={ref} {...props} />
));
