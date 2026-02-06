import React from 'react';
import ReactDOM from 'react-dom';
import {TopPage} from './toppage/toppage.js';
import {AboutPage} from './aboutpage/aboutpage.js';
import {LinkPage} from './linkpage/linkpage.js';
import {LangsPage} from './langspage/langspage.js';
import {ContactPage} from './contactpage/contactpage.js';
import {IllustPage} from './illustpage/illustpage.js';
import './index.css';
import logo from './img/logo.png';

/**
 * ページを追加・ページ名を更新する際はここのpageListを更新すること
 */
class MyPage extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            pageTitle : "Top",
            pageList : ["Top", "About", "Link", "Languages", "Illust", "Contact"],
        };
    }

    handleClick(page){
        if (page === this.state.pageTitle) {
            return ;
        }
        this.setState({
            pageTitle : page,
        });
    }
    
    render(){
        return (
            <div class = "pages">
                <Header
                    onClick={(page) => this.handleClick(page)}
                    nowPage={this.state.pageTitle}
                    pageList={this.state.pageList}
                />
                <Contents page={this.state.pageTitle}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div class="header">
                <Logo />
                <MenuBar
                    onClick={this.props.onClick}
                    nowPage={this.props.nowPage}
                    pageList={this.props.pageList}
                />
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div class="page-logo">
                こるぼーのホームページ
                {/* <img class="page-logo-img" src={logo}/> */}
            </div>
        );
    }
}

class MenubarButton extends React.Component{
    render(){
        return (
            <button
                class={this.props.isSelected ? "SelectedButton" : "NotSelectedButton"}
                onClick={() => this.props.onClick(this.props.pageTitle)}
            >
            {this.props.pageTitle}
            </button>
        );
    }
}

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this);
    }
    renderButton(pageTitle){
        return (
            <MenubarButton
                pageTitle={pageTitle}
                onClick={this.props.onClick}
                isSelected={this.props.nowPage===pageTitle}
            />
        );
    }
    render(){
        return (
            <div class="menubar">
                {this.props.pageList.map(this.renderButton)}
            </div>
        );
    }
}

/**
 * ここで表示するページのルーティング設定してる
 */
class Contents extends React.Component {
    renderContent(){
        switch(this.props.page){
            case "Top":
                return (<TopPage />);
            case "About":
                return (<AboutPage />);
            case "Link":
                return (<LinkPage />);
            case "Languages":
                return (<LangsPage />);
            case "Illust":
                return (<IllustPage />);
            case "Contact":
                return (<ContactPage />);
            default:
                throw new Error("変な操作しないで！");
        }
    }
    render(){
        return (
            <div class="contents">
                {this.renderContent()}
            </div>
        );
    }
}



ReactDOM.render(
    <MyPage />,
    document.getElementById('root')
);