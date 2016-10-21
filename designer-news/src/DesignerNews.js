import React from "react";
import TabBar from "./TabBar";
import news from "./data/news";
import NewsList from "./NewsList";
import tabs from "./data/tabs";

class DesignerNews extends React.Component {

	constructor(props){
		super(props);
		this.toggleStar = this.toggleStar.bind(this);
		this.checkTab = this.checkTab.bind(this);
		this.state = {
	      newsList: news,
	      tabs
		}
	}
	toggleStar(id){
		//cloning
		var newsList = this.state.newsList.slice(0).map(product => Object.assign({}, product));
		newsList.map(function (news) {
			if(news.id === id){
				news.status = !news.status;
			}
		})
		this.setState({
			newsList
		})
	} 
	checkTab(index) {
		var tabs = this.state.tabs.slice(0).map(product => Object.assign({}, product));

		tabs.map(function(tab) {
			tab.isActive = false;
		})

		tabs[index].isActive = true;

		this.setState({
			tabs
		})
	}
	render() {
		return (
			<div id="container">
				<div id="header-container">
					<TabBar 
						starred={this.starred}
						tabs={this.state.tabs}
						checkTab = {this.checkTab}
					/>
				</div>
				<div id="page-container" className="wrap padded has-sidebar">
					<div id="page-main-content">
						<div id="page-main-content-inner" role="main">
							<NewsList 
								newsList={this.state.newsList} 
								tabs={this.state.tabs}
								toggleStar= {this.toggleStar}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DesignerNews;