import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<Header />
				<div id="wrapper">
					<Sidebar></Sidebar>
					<div id="content-wrapper">
						<div className="container-fluid">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link to={"/dashboard"}>Dashboard</Link>
								</li>
								<li className="breadcrumb-item active">Display</li>
							</ol>

							<div className="card mb-3">
								<div className="card-header">
									<i className="fas fa-table"></i>
									Registered Interns
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<table
											className="table table-bordered"
											id="dataTable"
											width="100%"
											cellSpacing="0"
										>
											<thead>
												<tr>
													<th>Name</th>
													<th>Title</th>
													<th>Location</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Instituition</th>
												</tr>
											</thead>
											<tfoot>
												<tr>
													<th>Name</th>
													<th>Title</th>
													<th>Location</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Instituition</th>
												</tr>
											</tfoot>
											<tbody>
												<tr>
													<td>Bk Roland</td>
													<td>Student</td>
													<td>Kampala</td>
													<td>51</td>
													<td>2021/11/13</td>
													<td>Harvard University</td>
												</tr>

												<tr>
													<td>Nabukeera Aida </td>
													<td>Student</td>
													<td>Mpigi</td>
													<td>67</td>
													<td>2021/01/25</td>
													<td>Mpigi Female University</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="card-footer small text-muted">
									Updated yesterday at 12:00 PM
								</div>
							</div>
						</div>

						<footer className="sticky-footer">
							<div className="container my-auto">
								<div className="copyright text-center my-auto">
									<span>Copyright © stratcom {"Charles Junior"}</span>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}
