import React from 'react';
import './css/toppage.css';

export class TopPage extends React.Component {
    render(){
        return (
            <div class="toppage">
                <h1> こるぼーのページ　練習につくった　みてね</h1>
                <h2>last update: 2021/04/05</h2>
                <h2 class="SmartPhoneMessage">グワーッこのページはPCで見てくれ</h2>
            </div>
        );
    }
}