import '../../Styles/Template.css';


export default function Resume() {
	return (
		<div className="container spacingFooter animate__animated animate__fadeIn space spaceDown1">
			<div id="doc2" className="yui-t7 margin1 contain2 full hero">
				<div id="inner">
					<div id="hd">
						<div className="yui-gc">
							<div className="yui-u first">
								<h1>Joshua Crane</h1>
								<h2><a href="mailto:name@yourdomain.com" className="link">Email</a>/<a href="mailto:name@yourdomain.com" className="link">LinkedIn</a>/<a href="mailto:name@yourdomain.com" className="link">GitHub</a></h2>
							</div>
							<div className="yui-u">
								<div className="contact-info">
									<h3>(704)369-3265</h3>
									<h3>4408 Peach Rd, Chesapeake</h3>
									<h3>VA, 23321</h3>
								</div>
							</div>
						</div>
					</div>
					<div id="bd">
						<div id="yui-main">
							<div className="yui-b">
								<div className="yui-gf">
									<div className="yui-u first">
										<h2>Profile</h2>
									</div>
									<div className="yui-u">
										<p className="enlarge p-res">
											Over my career I have developed strong social skills with people from many walks of life. I'm a very adaptable and teachable person who is easy to get along with.
											I have experience handling fast-paced environments and how to structure priorities to get it done. Graduating at the top of my class I am looking to bring that same energy to the workplace.
											I strive to lead others to success with me and not behind me. Count on me to maintain a very professional work ethic and strive to do better attitude.
										</p>
									</div>
								</div>
								<div className="yui-gf">
									<div className="yui-u first">
										<h2>Front End</h2>
									</div>
									<div className="yui-u">
										<ul className="talent">
											<li className="li-res">Materialize</li>
											<li className="li-res">HTML/CSS</li>
											<li className="last li-res ">Javascript</li>
										</ul>
										<ul className="talent">
											<li className="li-res">Bootstrap</li>
											<li className="li-res">jQuery</li>
											<li className="last li-res">AJAX</li>
										</ul>
										<ul className="talent">
											<li className="li-res">Bulma</li>
											<li className="li-res">APIs</li>
											<li className="last li-res">Git</li>
										</ul>
									</div>
								</div>
								<div className="yui-gf">
									<div className="yui-u first">
										<h2>Technical/BackEnd</h2>
									</div>
									<div className="yui-u">
										<ul className="talent">
											<li className="li-res">Express servers</li>
											<li className="li-res">Error Handling</li>
											<li className="last li-res ">Handlebars</li>
										</ul>
										<ul className="talent">
											<li className="li-res">Heroku</li>
											<li className="li-res">Sequelize</li>
											<li className="last li-res">Testing</li>
										</ul>
										<ul className="talent">
											<li className="li-res">MySQL</li>
											<li className="li-res">Node</li>
										</ul>
									</div>
								</div>
								<div className="yui-gf">
									<div className="yui-u first">
										<h2>Performance</h2>
									</div>
									<div className="yui-u">
										<ul className="talent">
											<li className="li-res">Progressive Web Apps</li>
											<li className="li-res">Computer Science</li>
											<li className="last li-res ">MongoDB</li>
										</ul>
										<ul className="talent">
											<li className="li-res">MERN</li>
											<li className="li-res">React</li>
										</ul>
									</div>
								</div>
								<div className="yui-gf">
									<div className="yui-u first">
										<h2>Projects</h2>
									</div>
									<div className="yui-u">
										<div className="talent">
											<h2>Rapid Resume</h2>
											<p className="p-res"> Build a custom resume stored in the cloud using mongoDB, React, Express Servers and Auth.</p>
											<a href="https://rapid-resume.herokuapp.com/" target="__blank" className="link borderBotBNo">Rapid-Resume.com</a>
										</div>
										<div className="talent">
											<h2>Covid & Cats</h2>
											<p className="p-res">Collecting data from the entire USA with a few clicks using an API while also collecting Cat Gif's.
												The one spot where you can be comforted, while you're informed. </p>
											<a href="https://jdogcrane.github.io/covid-and-cats/" target="__blank" className="link borderBotBNo">Covid-and-Cats.com</a>
										</div>
										<div className="talent">
											<h2>Forum Friends</h2>
											<p className="p-res">A social media platform with login authentication and stored data in MongoDB.</p>
											<a href="https://forum-friends.herokuapp.com/" target="__blank" className="link borderBotBNo">Forum-Friends.com</a>
										</div>
									</div>
								</div>
								<div className="yui-gf last">
									<div className="yui-u first">
										<h2>Education</h2>
									</div>
									<div className="job last">
										<h4>2013-2016</h4>
									</div>
									<div className="yui-u">
										<h2>Kingdom Education for Young Scholars - Chesapeake, VA</h2>
										<div className="job last">

											<h4>2021</h4>
										</div>
										<h3>The University of North Carolina Charlotte Full Stack Web Developer Program &mdash; <strong>4.0 GPA</strong> </h3>
									</div>
								</div>
								<div id="ft">
									<p className="p-res">Joshua Crane &mdash; <a className="link" href="mailto:joshua.crane.me@gmail.com">joshua.crane.me@gmail.com</a> &mdash; (704)369-3265 &mdash; 4408 Peach Rd, Chesapeake, VA 23321
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	);
}
