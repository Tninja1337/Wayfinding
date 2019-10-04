import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}
//This adds our redux or "app" level state into our props object
const mapStateToProps = state => {
  return {libraries: state.libraries};
};
//Used to connect to the redux store so we can modify state
export default connect(mapStateToProps)(LibraryList);
