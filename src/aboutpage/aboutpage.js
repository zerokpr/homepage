import React from 'react';
import './aboutpage.css'
import my_icon from "./space_hiyoko.jpg"

export class AboutPage extends React.Component {
    render(){
        return (
            <div class="aboutpage">
                <div class="aboutpage-wrapper">
                    <div class="aboutpage-title-wrapper">
                        <h1 class="abouttitle">About Me</h1>
                        <img src={my_icon} class="my-icon"/>
                    </div>
                    <div class="self-introduction">
                       こんにちは。ぼくはこるぼーといいます。<br />
                        都内某所でプログラマーとして働いています。<br />
                        プログラミング未経験で友人(@saba_kpr)に競プロを布教され、口車に乗せられるままにAtCoderを始めてからなんと7年が経ちました。びっくり<br />
                        AtCoder水色、その他実績特になし。（かなしい）<br />
                        始めた当初は天才プログラマーになる予定だったはずですが、何やら雲行きが怪しくなってきました。やべーぞ！<br />
                        仕事だとクラウド色々（AWS、GCP、Azure）触ったりしています。<br />
                        後は趣味で色々やっています。<br />
                        <br />
                        ○職歴<br/>
                        1社目:映像配信とかやってるちっこいweb企業<br />
                        2社目:Nから始まるクソデカSIer<br />
                        3社目:アルゴリズム高速化とかする方のF社（予定）<br />
                        <br />
                        ○資格<br />
                        ・基本情報技術者<br />
                        ・応用情報技術者<br />
                        ・SnowPro Core Certification<br />

                        <br />
                        ○その他<br />
                        好きな食べ物：ラーメン、うどん、カレー<br />
                        好きな言語：Rust、C/C++、Python、Haskell、Lisp<br />
                        趣味：プログラミング、アニメ、漫画、イラスト（描く見るどっちも）、読書、TRPG（主にCoC）<br />
                        <br />
                        よかったら仲良くしてください～<br />
                    </div>
                </div>
            </div>
        );
    }
}
