import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const ROLES = [
    'Dirigent',
    'Graf von Krolock',
    'Sarah',
    'Alfred',
    'Professor Abronsius',
    'Chagal',
    'Magda',
    'Rebecca',
    'Herbert',
    'Koukol',
    'Tanzsolisten',
    'Gesangssolisten',
    'Tanzensemble',
    'Gesangsensemble',
];

const MULTI_ROLES = [
    'Tanzsolisten',
    'Gesangssolisten',
    'Tanzensemble',
    'Gesangsensemble',
];

// TODO Custom filter (Levenstein)?
class App extends Component {

    state = {
        names: [],

        currentRole: ROLES[0],
        currentInput: '',
        currentShow: {},
        currentCast: {},

        shows: [],
    };

    componentDidMount() {
        fetch('/api/actors/', {
            accept: 'application/json',
        }).then((response) => {
            return response.json();
        }).then((actors) => {
            this.setState({ names: actors });
        });
    }

    transitionToNextRole() {
        const { currentRole } = this.state;
        const nextRoleIndex = ROLES.indexOf(currentRole) + 1;
        if (nextRoleIndex >= ROLES.length) {
            let shows = this.state.shows;
            shows.push({
                'date': this.state.currentShow['date'],
                'time': this.state.currentShow['time'],
                'location': this.state.currentShow['location'],
                'cast': this.state.currentCast,
            });
            this.setState({
                shows: shows,
                currentCast: {},
                currentRole: ROLES[0],
                currentInput: '',
                currentShow: {
                    'date': '',
                    'time': '',
                    'location': '',
                },
                output: JSON.stringify(shows, null, 4),
            });
            this.firstInput.focus();
            return;
        }

        this.setState({
            currentRole: ROLES[nextRoleIndex],
            currentInput: '',
        });
        this.autoCompleteInput.focus();
    };

    handleMetaDataChange = (event, value) => {
        const { currentShow } = this.state;

        const field = event.target.name;
        currentShow[field] = value;
        this.setState({ currentShow: currentShow });
    };

    handleCastChange = (searchText, dataSource, params) => {
        this.setState({ currentInput: searchText });
    };

    handleNewRequest = (chosenRequest, index) => {
        /* magic words ftw */
        if (chosenRequest.trim() === 'x') {
            this.transitionToNextRole();
            return;
        }

        const { currentCast, currentRole } = this.state;

        currentCast[currentRole] = currentCast[currentRole] || [];
        currentCast[currentRole].push(chosenRequest);
        this.setState({
            currentCast: currentCast,
            names: this.state.names.concat([chosenRequest]),
        });

        if (MULTI_ROLES.indexOf(currentRole) === -1) {
            this.transitionToNextRole();
        } else {
            this.setState({ currentInput: '' });
            this.autoCompleteInput.focus();
        }
    };

    filter = (searchText, key) => {
        const lcText = searchText.toLowerCase();
        const lcKey = key.toLowerCase();
        return lcKey.includes(lcText);
    };

    renderCurrentCast() {
        const { currentCast } = this.state;
        const rows = ROLES.map((role) => {
            if (!currentCast[role] || currentCast[role].length === 0) {
                return (
                    <tr key={role} />
                );
            }

            const chips = currentCast[role].map((actor) => {
                return (
                    <Chip key={actor}>{actor}</Chip>
                );
            });

            return (
                <tr key={role}>
                    <td>{role}</td>
                    <td>{chips}</td>
                </tr>
            );
        });

        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        name="date"
                        value={this.state.currentShow.date}
                        hintText="DD.MM.YYYY"
                        onChange={this.handleMetaDataChange}
                        ref={(input) => { this.firstInput = input; }}
                        autoFocus
                    />
                    <br />
                    <TextField
                        name="time"
                        value={this.state.currentShow.time}
                        hintText="HH:MM"
                        onChange={this.handleMetaDataChange}
                    />
                    <br />
                    <TextField
                        name="location"
                        value={this.state.currentShow.location}
                        hintText="Location"
                        onChange={this.handleMetaDataChange}
                    />
                    <br />
                    <br />
                    <p>{this.state.currentRole}</p>
                    <AutoComplete
                        name="currentRoleInput"
                        hintText=""
                        dataSource={this.state.names}
                        onNewRequest={this.handleNewRequest}
                        onUpdateInput={this.handleCastChange}
                        filter={this.filter}
                        searchText={this.state.currentInput}
                        maxSearchResults={5}
                        ref={(input) => { this.autoCompleteInput = input; }}
                    />

                    {this.renderCurrentCast()}

                    <TextField
                        name="output"
                        multiLine={true}
                        rows={10}
                        fullWidth={true}
                        value={this.state.output}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
