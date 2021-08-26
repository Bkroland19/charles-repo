import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import TitleComponent from "../pages/title";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.handleClickLogout = this.handleClickLogout.bind(this);
	}

	state = {
		toDashboard: false,
	};

	handleClickLogout() {
		localStorage.removeItem("token");
		localStorage.setItem("isLoggedIn", false);
		this.setState({ toDashboard: true });
	}

	render() {
		if (this.state.toDashboard === true) {
			return <Redirect to="/" />;
		}
		return (
			<nav className="navbar navbar-expand navbar-dark bg-dark static-top">
				<TitleComponent title="strat-com-reg "></TitleComponent>

				<Link to={"/"} className="navbar-brand mr-1">
					Stratcom Registration Panel   By Charles Junior Sserumanya Makerere University Student Yr2{" "}
				</Link>

				<button
					className="btn btn-link btn-sm text-white order-1 order-sm-0"
					id="sidebarToggle"
				>
					
				</button>

				<form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
					
				</form>

				<ul className="navbar-nav ml-auto ml-md-0">
					<li className="nav-item dropdown no-arrow">
						<Link
							to={"#"}
							className="nav-link dropdown-toggle"
							id="userDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-user-circle fa-fw"></i>
						</Link>
						<div
							className="dropdown-menu dropdown-menu-right"
							aria-labelledby="userDropdown"
						>
							<Link to={"#"} className="dropdown-item">
								Settings
							</Link>
							<Link to={"#"} className="dropdown-item">
								Activity Log
							</Link>
							<div className="dropdown-divider"></div>
							<Link
								to={"#"}
								onClick={this.handleClickLogout}
								className="dropdown-item"
								data-toggle="modal"
								data-target="#logoutModal"
							>
								Logout
							</Link>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}
