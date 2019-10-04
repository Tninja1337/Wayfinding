import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {id, title} = this.props.library.item;
    const {titleStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
//ownProps can be taken in here so we know the difference between
//state properties and properties unique to this component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.item.id;
  return {expanded};
};
//Actions is passed with connect if we want to perform state changes
//in this component
export default connect(
  mapStateToProps,
  actions,
)(ListItem);
