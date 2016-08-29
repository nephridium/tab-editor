import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { selectTrack } from '../../actions/tracks';
import type { State, Track } from '../../util/stateTypes';

const selectStyle = {
  fontFamily: 'Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif',
  fontSize: 13, fontWeight: 600
};

class TrackSelect extends Component {
  props: {
    currentTrackIndex: number,
    tracks: Array<Track>,
    selectTrack: Function
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(option) {
    const track = option.value;
    this.props.selectTrack(parseInt(track));
  }

  render() {
    const options = this.props.tracks.map((_, track) => ({ value: track, label: `Track ${track + 1}` }));
    return (
      <Select onChange={this.onChange} value={this.props.currentTrackIndex} clearable={false} searchable={false}
        disabled={this.props.tracks.length === 1} options={options}
        wrapperStyle={{ width: 140 }}
        style={selectStyle} menuStyle={selectStyle}
      />
    );
  }
}

export default connect(
  (state: State) => ({
    tracks: state.tracks.present,
    currentTrackIndex: state.currentTrackIndex
  }),
  { selectTrack }
)(TrackSelect);
