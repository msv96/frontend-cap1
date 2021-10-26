import React from "react";

const Home = () => {
	return (
		<div className="home">
			<h2>Office Planning Tool</h2>
			<div>
				Hello, welcome to our platform where beginners can easily learn
				to use.
			</div>
			<div>
				<div className="forms">
					<h4>Signin to Explore</h4>
                    <form className="form_flex">
                        <label htmlFor="mailid">E-mail ID</label>
                        <input type="email" name="email" id="mailid" className="input" />
                        <label htmlFor="pwd">Password</label>
                        <input type="password" name="password" id="pwd" className="input" />
                        <input type="submit" value="Login" className="btn" />
                    </form>
				</div>
                <div className="forms">
                    <h4>Don't have an account, Register</h4>
                    <form className="form_flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="input" />
                        <label htmlFor="mail">E-mail ID</label>
                        <input type="email" name="email" id="mail" className="input" />
                        <label htmlFor="pwd1">Password</label>
                        <input type="password" name="password" id="pwd1" className="input" />
                        <input type="submit" value="Register" className="btn" />
                    </form>
                </div>
			</div>
		</div>
	);
};

export default Home;
