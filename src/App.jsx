import React from 'react';
import Calendar from './components/calendar/calendar';
import Header from './components/header';
import Notes from './components/notes';
import Todo from './components/todo';

class App extends React.Component{
  render() {
    return ( 
      <>
        <Header />
        <div id="AppBody">
          <Calendar />
          <div id="todoNotesCon">
            <Todo />
            <Notes />
          </div>
        </div>
      </>
    );
  }
}
export default App;
