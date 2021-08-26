import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
	render() {
		return (
			<div id="wrapper">
				<ul className="sidebar navbar-nav">
					<li className="nav-item active">
						<Link to={"/dashboard"} className="nav-link">
							<i className="fas fa-fw fa-tachometer-alt"></i>
							<span>&nbsp;Admin Panel</span>
						</Link>
					</li>

					<li className="nav-item">
						<Link to={"/index"} className="nav-link">
							<i class="fa-solid fa-stamp"></i>
							<span>&nbsp;Register Student</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/fileupload"} className="nav-link">
							<i className="fas fa-fw fa-file-archive"></i>
							<span>&nbsp;File Upload</span>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
