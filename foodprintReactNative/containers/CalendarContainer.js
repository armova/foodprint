import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {

} from 'react-native';
import {
  StyleSheet,
} from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

import { Container, Content, Button, Icon, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';
import store from '../store';
import { setMealsByDate } from '../reducers/meal'

export default class CalendarPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      date: Moment().format(),
    };
  }

  goToDay = () => {
    //Select current meals by date
    let formattedDate = Moment(this.state.date).format().slice(0,10)
    store.dispatch(setMealsByDate(formattedDate))
    // Send user to day page for selcted date
    Actions.day({label: Moment(this.state.date).format('MMMM DD YYYY')})
  }

  render() {
    const BLUE = '#2196F3';
    const WHITE = '#FFFFFF';
    const GREY = '#BDBDBD';
    const BLACK = '#424242';
    const LIGHT_GREY = '#F5F5F5';



    return (
      <Container style={{marginTop: 80}}>
        <Content padder>

          <Calendar
            onChange={(date) => this.setState({date})}
            selected={this.state.date}

            //finalStage="month"
            minDate={Moment().subtract(10, 'years').startOf('day')}
            maxDate={Moment().add(10, 'years').startOf('day')}
            //General Styling}

            barView={{
              backgroundColor: '#f6b19c',
              padding: 10,
            }}
            barText={{
              fontWeight: 'bold',
              color: WHITE,
            }}
            stageView={{
              padding: 0,
            }}
            // Day selector styling
            dayHeaderView={{
              backgroundColor: LIGHT_GREY,
              borderBottomColor: GREY,
            }}
            dayHeaderText={{
              fontWeight: 'bold',
              color: BLACK,
            }}
            dayRowView={{
              borderColor: LIGHT_GREY,
              height: 40,
            }}
            dayText={{
              color: BLACK,
            }}
            dayDisabledText={{
              color: GREY,
            }}
            dayTodayText={{
              fontWeight: 'bold',
              color: '#f7f1a6',
            }}
            daySelectedText={{
              fontWeight: 'bold',
              backgroundColor: '#f7f1a6',
              color: WHITE,
              borderRadius: 15,
              borderColor: "transparent",
              overflow: 'hidden',
            }}
            // Styling month selector.
            monthText={{
              color: BLACK,
              borderColor: BLACK,
            }}
            monthDisabledText={{
              color: GREY,
              borderColor: GREY,
            }}
            monthSelectedText={{
              fontWeight: 'bold',
              backgroundColor: BLUE,
              color: WHITE,
              overflow: 'hidden',
            }}
            // Styling year selector.
            yearMinTintColor={BLUE}
            yearMaxTintColor={GREY}
            yearText={{
              color: BLACK,
            }}
            />
        <Button block onPress={this.goToDay} style={{marginTop: 10, backgroundColor: '#f6b19c'}}>
            <Icon name='pizza' />
            <Icon name='nutrition'  />
            <Icon name='restaurant' />
            <Text>{"Go to: " + Moment(this.state.date).format('MMMM DD YYYY')}</Text>
        </Button>
        </Content>



      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonStyle: {
    margin: 60
  }
});


