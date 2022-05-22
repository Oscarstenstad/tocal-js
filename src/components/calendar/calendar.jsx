import React from "react";

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate()};
    }

    weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    render(){
        return (
            <div id="calendarCon">
                <div id="calTopDiv">
                    <div id="yearMonthDisp">
                        <h2>{this.months[this.state.month]} {this.state.year}</h2>
                    </div>
                    <div id="buttonDiv">
                        <button id="backBtn" onClick={(e) => {
                            if (this.state.month == 0) this.setState({year: this.state.year-1});
                            this.setState({month : (this.state.month==0 ? this.state.month = 11 : this.state.month-1)});
                            e.target.blur();
                        }}>Back</button>
                        <button id="nextBtn" onClick={(e) => {
                            if (this.state.month == 11) this.setState({year: this.state.year+1});
                            this.setState({month: (this.state.month==11 ? this.state.month = 0 : this.state.month+1)});
                            e.target.blur();
                        }}>Next</button>
                    </div>
                </div>
                <div>
                    <table id="calTable">
                        <thead>
                            <tr>
                            {this.weekdays.map((weekday) => ( 
                                <th key={weekday}>{weekday}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                                {this.displayCal(this.state.year, this.state.month).map(week => (
                                    <tr key={week}>{week.map((weekday) => (
                                            <td key={weekday[1]+Math.floor((Math.random()*100000)+1)}>{weekday[1]}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    getDateInMonth(year, month, date) {
        var daysInMonth = new Date(year, month, date).getDate();
        return daysInMonth;
    }

    getDayInMonth(year, month, date) {
        var dayInMonth = new Date(year, month, date).getDay();
        return dayInMonth;
    }

    emptyDays(num) {
        return new Array(num);
    }

    displayCal(year, month) {
        var tmpDate = 1;
        const daysInMonth = [[], [], [], [], [], [], []];
            for (let i = 0; i < 6; i++){
                for (let j = 0; j < 7; j++) {
                    if (i==0 && j<this.getDayInMonth(year, month, tmpDate)) {
                        daysInMonth[i][j] = [[j], []];
                    } else if (tmpDate < this.getDateInMonth(year, month+1, 0)+1) {
                        daysInMonth[i][j] = [[this.getDayInMonth(year, month, tmpDate)], [this.getDateInMonth(year, month, tmpDate)]]; 
                        tmpDate++;
                    } else if (tmpDate >= this.getDateInMonth(year, month+1, 0)+1) {
                        daysInMonth[i][j] = [[j], []];
                        tmpDate++;
                    }
            }
        }
        return daysInMonth;
    }
}

export default Calendar;