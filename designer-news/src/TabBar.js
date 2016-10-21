import React from "react";

class TabBar extends React.Component {
	constructor(props){
		super(props);
		this.checkTab = this.checkTab.bind(this);
	}

	isStarred() {
		return this.props.starred()
	}
	checkTab(index) {
		this.props.checkTab(index);
	}

	render() {
		var _self = this;
		var navTab= this.props.tabs.map(function(tabItem,index) {
			return (
				<li key={index}><a href="#" onClick={_self.checkTab.bind(this,index)} className={tabItem.isActive?"active":""}>{tabItem.tabName}</a></li>
			);
		});
		return(<header id="site-header">
			<nav id="header-sub-navigation-container">
				<div className="wrap padded">
					<ul id="sub-navigation-list-items">
						<div id="sub-navigation-visible-items">
							{navTab}
						</div>
					</ul>
				</div>
			</nav>
		</header>)
	}
}

export default TabBar;