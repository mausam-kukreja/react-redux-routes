import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SettingsPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    console.log(2222, this.inputNode.value);
    this.props.onSave(this.inputNode.value);
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <p>Update title</p>
        <input
          type="text"
          defaultValue={this.state.input}
          ref={node => {
            this.inputNode = node;
          }}
        />
        <input type="button" value={'Save'} onClick={this.onSave} />
      </div>
    );
  }
}

SettingsPage.propTypes = {
  settings: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    flash: PropTypes.string,
  }).isRequired,
  config: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const selector = state => ({
  config: state.config,
  settings: state.settings,
});

export default connect(selector, {
  onSave: data => () => console.log('save', data),
})(SettingsPage);
