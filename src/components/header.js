import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../actions';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export class Header extends React.Component  {

    toggleInfoModal() {
        console.log('toggled');
        this.props.dispatch(showModal(!this.props.showModalInfo));
    }

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
})

export default connect(mapStateToProps)(Header);