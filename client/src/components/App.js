import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './_Layout/Header';
import Footer from './_Layout/Footer';
import Ranking from './Ranking/Ranking';
import Payment from './Payment/Payment';
import GameRule from './Rules/GameRule';
import Landing from './_Layout/Landing';
import Admin from './Admin/Admin';
import Mygame from './MyGame/Mygame';


class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchTeam();
        this.props.fetchPlayer();
    }

    render(){
        return (
                <Router>
                    <div>
                        <Header />
                        <Grid>
                            <Row className="showGrid">
                                <Col xs={12}>
                                    <Switch>
                                        <Route path="/ranking" component={Ranking} />
                                        <Route path="/payment" component={Payment} />
                                        <Route path="/rule" component={GameRule} />
                                        <Route path="/admin" component={Admin} />
                                        <Route path="/game/:id" component={Mygame} />
                                        <Route path="/" component={Landing} />
                                    </Switch>
                                </Col>
                            </Row>
                        </Grid>
                        <Footer />
                    </div>
                </Router>
        );
    }
};

export default connect(null, actions)(App);