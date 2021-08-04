import '../../Styles/Template.css';


export default function Resume() {
	return (

		<div className="padding-resume">

			<div className="resume_wrapper space animate__animated animate__slideInUp animate__delay-1s">
				<div className="resume_left">

					<div className="resume_bottom">
						<div className="resume_item resume_namerole">
							<div className=" right">
								<div className="role">(704)369-3265</div>
								<div className="role">joshua.crane.me@gmail.com</div>
							</div>
							<div className="name">Joshua Crane</div>
							<div className="role">Full Stack Web Developer</div>
						</div>
						<div className="resume_item resume_profile">
							<div className="resume_title">Profile</div>
							<div className="resume_info">Over my career I have developed strong social skills with people from many walks of life.
								I have experience handling fast-paced environments with a team and how to structure priorities to accomplish the task.
								I strive to lead others to success with me and not behind me. You can count on me to maintain a very professional work ethic and strive to do better attitude. My preferred line of work is UI-UX design.</div>
						</div>
						<div className="resume_item resume_address">
							<div className="resume_title">Address</div>
							<div className="resume_info">
								4408 Peach Rd,<br />
								23321 Chesapeake,<br />
								VA, United States
							</div>
						</div>

						<div className="resume_item resume_skills skills_bar">
							<div className="resume_title">Front End</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">Materialize</div>
									<div className="skills_bar">
										<p>
											Bootstrap
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Bulma</div>
									<div className="skills_bar">
										<p>
											HTML/CSS
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Javascript</div>
									<div className="skills_bar">
										<p>
											jQuery
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">APIs</div>
									<div className="skills_bar">
										<p>
											AJAX
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Handlebars</div>

								</div>
							</div>
						</div>
						<div className="resume_item resume_skills skills_bar">
							<div className="resume_title">Back End</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">MySQL</div>
									<div className="skills_bar">
										<p>
											Jest Testing
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Node</div>
									<div className="skills_bar">
										<p>
											Sequelize
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Error Handling</div>
									<div className="skills_bar">
										<p>
											Heroku
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="resume_item resume_skills skills_bar">
							<div className="resume_title">Performance</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">PWA</div>
									<div className="skills_bar">
										<p>
											MERN
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">React</div>
									<div className="skills_bar">
										<p>
											MongoDB
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">SEO</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="resume_right">
					<div className="resume_item resume_namerole">
						<div className=" right">
							<div className="role">(704)369-3265</div>
							<div className="role">joshua.crane.me@gmail.com</div>
						</div>
						<div className="name">Joshua Crane</div>
						<div className="role">Full Stack Web Developer</div>
					</div>
					<div className="resume_item resume_education">
						<div className="resume_title">Education</div>
						<div className="resume_info">
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<p>Home Schooled</p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<p> <a className="link-black black-text" href="https://www.keysofva.org/" target="__blank">Kingdom of Education Young Scholars</a></p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<p> <a className="link-black black-text" href="https://bootcamp.uncc.edu/coding/" target="__blank">University of North Carolina Charlotte</a></p>
									<p>Full Stack Web Developer Program &ndash; <strong>4.0 GPA</strong> </p>
								</div>
							</div>
						</div>
					</div>
					<div className="resume_item resume_experience">
						<div className="resume_title">Projects</div>
						<div className="resume_info">
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<strong>Covid & Cats</strong>
									<br />
									<p classNameName="p-res">A website that grabs data from the entire USA with a few clicks using an API and a Cat Gif's.
										Designed and built using Materialize framework</p>
									<p> <a className="link borderBotBNo black-text" href="https://jdogcrane.github.io/covid-and-cats/" target="__blank">CovidandCats.com</a></p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<strong>Forum Friends</strong>
									<br />
									<p classNameName="p-res">A social media platform with login authentication and stored data in MongoDB built using Materialize framework.</p>
									<p> <a className="link borderBotBNo black-text" href="https://forum-friends.herokuapp.com/" target="__blank">Forum-Friends.com</a></p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year"></div>
								<div className="content">
									<strong>Rapid Resume</strong>
									<br />
									<p classNameName="p-res"> Build a resume stored in mongoDB using, React, Express Servers, Auth and Bulma as the framework.</p>
									<p> <a className="link borderBotBNo black-text" href="https://rapid-resume.herokuapp.com/" target="__blank">Rapid-Resume.com</a></p>
								</div>
							</div>
						</div>
					</div>
					<div className="resume_item center">
						<div className="resume_title">Reference</div>
						<div className="resume_info">
							<div className="interests">
								<div className="int_data">
									<ul className="center">
										<li>Anthony Cooper</li>
										<li><a className="link-black black-text" href="tel:312-835-6451">(312)-835-6451</a></li>
										<li><a className="link-black black-text" href="mailto: iam@anthonycooper.me">iam@anthonycooper.me</a></li>
										<li><a className="link-black black-text" href="https://www.linkedin.com/in/anthonydcooper/">https://www.linkedin.com/in/anthonydcooper/</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" contain1 animate__animated animate__fadeIn spaceDown2 animate__delay-5s ">
				<h1 className="Black-text center text-lighten-2 flow-text title borderTop">My<span> Next</span> <a
					href="https://www.linkedin.com/in/joshua-crane-911532210/" className="link black-text"> Path </a>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></h1>
				<form id="javascript_form" className=" container messenger">

					<div className=" borderRound center ">

						<input type="text" name="subject" placeholder="Subject" />
						<textarea name="text" placeholder="Message" className="spacing normalText"></textarea>

						{/* <!-- not required, but we'd appreciate it if you'd link to us somewhere on your site --> */}
						<input type="submit" id="js_send" value="Send" className="btn spacing2 white black-text" />
						<p className="white-text">Powered by <a href="https://postmail.invotes.com" target="__blank">PostMail</a></p>
					</div>
					<div className="">
						<ul>
							<li><a className="link borderBotGNo spacing2" href="Joshua.crane.me@gmail.com" target="__blank">Email</a></li>
							<li><a className="link borderBotGNo spacing2" href="https://github.com/Jdogcrane" target="__blank">GitHub</a></li>
							<li><a className="link borderBotGNo spacing2" href="https://www.linkedin.com/in/joshua-crane-911532210/" target="__blank">LinkedIn</a></li>
						</ul>
					</div>
				</form>
			</div>
		</div>

	);
}
