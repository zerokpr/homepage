import React from 'react';
import './css/aboutpage.css'
import my_icon from "./img/space_hiyoko.jpg"

export class AboutPage extends React.Component {
    render(){
        return (
            <div class="aboutpage">
                <div class="my-profile-wrapper">
                    <h1 class="abouttitle">About Me</h1>
                    <img src={my_icon} class="my-icon"/>
                </div>
                <div class="self-introduction">
                    こんにちは。私はこるぼーといいます。<br />
                    都内某所でプログラマーとして働いています。<br />
                    プログラミング未経験で友人(@saba_kpr)に競プロを布教され、口車に乗せられるままに始めてからなんと5年が経ちました。びっくり<br />
                    AtCoder水色、その他実績特になし。（かなしい）<br />
                    始めた当初は天才プログラマーになる予定だったはずですが、何やら雲行きが怪しくなってきました。やべーぞ！<br />
                    バックエンドを担当したり、フロントエンドをちょっといじったり、AWSを設定したりと色々やっています。<br />
                    <br />
                    好きな食べ物：ラーメン、うどん、カレー<br />
                    好きな言語：C++、Python、Rust<br />
                    趣味：イラスト制作、読書、競プロ、CoC(TRPG)<br />
                    よかったら仲良くしてください～<br />
                </div>
            </div>
        );
    }
}
