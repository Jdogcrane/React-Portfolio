import { Card } from 'react-materialize';
import testPdf from '../../Styles/FastTrackResume.pdf';
export default function Resume() {




	const passwordChecker = (e) => {
		e.preventDefault()
		let password = document.getElementById("password");
		let overlay = document.getElementById("overlay");
		if (password.value === "password") {
			overlay.style.display = "none";
		}
		password.value = "";
		password.placeholder = "Incorrect Password"
	};



	return (
		<>
			<section id="parallax-1" className="outer-space">
				<div className='contain center resume'>

					{/* Enter Password */}
					<div id="overlay" className="overlay-password">
						<div className='space2 contain1'>
							<Card className='black paddingRound1 borderG animate__animated animate__headShake'>
							<form id="formSubmit" onSubmit={passwordChecker}>
									<input type="password" autoComplete='true' id="password" className='' placeholder='Please Enter Password'>
									</input>
									<div>
										<input type="submit" class="btn spacing2 white black-text hover" value="Enter"></input>
									</div>
							</form>
							</Card>
						</div>
						
						{/* If password is correct */}
					</div>
					<embed src={testPdf} type="application/pdf" className="center resume  space " />
				</div>

			</section>
		</>
	);

}
