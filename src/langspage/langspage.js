import React from "react";
import './langspage.css';
import cpp_icon from './img/cpp_icon.png';
import c_icon from './img/c_icon.png'
import py_icon from './img/py_icon.png';
import html_icon from './img/html_icon.png';
import js_icon from './img/js_icon.png';
import php_icon from './img/php_icon.png';

export class LangsPage extends React.Component {
    render() {
        return (
            <div class="skillpage">
                <div class="skillpage-wrapper">
                    <div class="skillpage-comment">
                        勉強した・使ったことのある言語一覧です。<br />
                        コードは大体Githubに載せてあります。<br />
                    </div>
                    <CLangBox />
                    <CppLangBox />
                    <PyLangBox />
                    <HtmlCssLangBox />
                    <JSLangBox />
                    <PHPLangBox />
                </div>
            </div>
        );
    }
}

class LangBox extends React.Component {
    renderComment() {
        return (
            <div class="langbox-comment" id={this.props.langname + "-langbox-comment"}>
                {
                    this.props.comment.split("\n").map(
                        (comment) => (
                            <React.Fragment>{comment}<br /></React.Fragment>
                        )
                    )
                }
            </div>
        );
    }

    render() {
        return (
            <div class="langbox" id={this.props.langname+"-langbox"}>
                <img src={this.props.icon} class="lang-icon" id={this.props.langname + "-lang-icon"}/>
                <a class="lang-name" id={this.props.langname}>{this.props.langname}</a>
                {this.renderComment()}
            </div>
        );
    }
}


class CLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"C"}
                icon={c_icon}
                comment={`大学在学中は画像処理や、簡単なゲームの実装などに使っていました。
                    最近は30日本を読みつつOS自作のために使ったりもしました。アセンブリに直結していて割と好きです。`}
            />
        )
    }
}

class CppLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"C++"}
                icon={cpp_icon}
                comment={"主に競技プログラミングに使っています。\nゲームの実装にもDxLibを利用しつつ使っています。"}
            />
        );
    }
}

class PyLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"Python"}
                icon={py_icon}
                comment={`競技プログラミング、Discord botの作成、スクレイピングとデータ分析、その他色々使います。
                    後はオライリーの「ゼロから作るDeep Learning」でニューラルネットを組むために使ったり。`}
            />
        );
    }
}

class HtmlCssLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"HTML/CSS"}
                icon={html_icon}
                comment={`仕事でフロントエンドをいじったり、趣味のwebサイトのフロントエンドを作る時にも使います。
                    未だにCSSに苦手意識があります。`}
            />
        );
    }
}

class JSLangBox extends React.Component {
    render() {
        return (
            <LangBox
                langname={"JavaScript"}
                icon={js_icon}
                comment={`仕事でNode.jsをバックエンドにしたweb開発をしていたことがあります。
                    後はもっぱらフロントエンド、特にReactで使います。とはいえ最近はTypeScriptを使う方が多いです。
                    なお、このページもReactで書いています。`}
            />
        )
    }
}

class PHPLangBox extends React.Component {
    render() {
        return <LangBox
        langname={"PHP"}
        icon={php_icon}
        comment={`1社目にいた頃はPHPを使っている製品が多かったので、古のフレームワークやレガシーコードをしばいていました。
            言語仕様の詳細を網羅とはいかないですが、それなりに使えるようになっています。`}
    />
    }
}

