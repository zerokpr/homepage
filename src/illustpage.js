import React from 'react';
import './css/illustpage.css';
import makkurobeau from './img/makkurobeau.png';
import hie_hiyoko from './img/hie_hiyoko.jpg';

class Illust extends React.Component {
    render() {
        return (
            <div><img src={this.props.picture} class="illust" /></div>
        );
    }
}

export class IllustPage extends React.Component {
    render() {
        return (
            <div class="illustpage">
                <div class="illust-head">
                    アイコンなどに使った自作画像やイラストです。<br />    
                    Twitterとかで適当に利用して頂いて大丈夫です。<br />
                    よかったら感想やアドバイスなど頂けると喜びます。<br />
                    <br />
                </div>
                <ul class="illusts">
                    <li><Illust picture={makkurobeau}/></li>
                    <li><Illust picture={hie_hiyoko} /></li>
                </ul>
            </div>
        );
    }
}