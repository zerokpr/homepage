import React from 'react';
import './toppage.css';

export class TopPage extends React.Component {
    render(){
        return (
            <div class="toppage">
                <div class="toppage-wrapper">
                    <h1> こるぼーのページ　練習につくった　みてね</h1>
                    <h2>last update: 2026/02/06</h2>
                    <h2 class="SmartPhoneMessage">グワーッこのページはPCで見てくれ</h2>
                </div>
            </div>
        );
    }
}