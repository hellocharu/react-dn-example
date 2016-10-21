import React from "react";
import News from './News';

class NewsList extends React.Component {
	constructor(){
		super();
		this.toggleStar = this.toggleStar.bind(this);
	}
	toggleStar(id) {
		this.props.toggleStar(id);
	}
	render() {
		var _self = this;
		var newsList;
		var activeTab;

		this.props.tabs.map(function(tab) {
			if(tab.isActive) {
				activeTab = tab.tabName;
			}
		});

		if(activeTab === "Top") {
			newsList = this.props.newsList.sort(function(obj1,obj2){
				return obj2.initialUpvotes-obj1.initialUpvotes;
			})
		}
		else if(activeTab === "Starred") {
			newsList = this.props.newsList.filter(function(obj) {
				return obj.status;
			})
		}

		var listItems = newsList.map(function (listItem,index) {
			return (
				<News 
					{...listItem}
					key={index}
					toggleStar = {_self.toggleStar}				
				/>
			)
		})
		return(<div className="montana-list" id="top-stories-list">
				<ul className="montana-list-items">
					{listItems}
				</ul>
			</div>
		)
	}
}

export default NewsList;