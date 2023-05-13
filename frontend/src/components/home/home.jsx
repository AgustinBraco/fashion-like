import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/context.jsx";
import Posts from "../../mocks/mocks.json";

// Sweet alert
import Swal from "sweetalert2";

function Home() {
	// LOGIN & SIGNUP LOGIC
	const { useLocalStorage, tutorialDone, animationDone, adminValue, loginValue, setLoginValue } = useContext(Context);

	const homeContainer = document.querySelector(".home-container")
	if (tutorialDone && animationDone && homeContainer) {
		homeContainer.style.overflow = "visible";
	};
	
	function togleMode() {
		const btnSwitch = document.querySelector(".home-switch");
		const loginContainer = document.querySelector(".login-container");
		const signupContainer = document.querySelector(".signup-container");
		const spanLogin = document.querySelector(".span-login");
		const spanSignup = document.querySelector(".span-signup");

		btnSwitch.classList.toggle("active");
		loginContainer.classList.toggle("active");
		signupContainer.classList.toggle("active");
		spanLogin.classList.toggle("active");
		spanSignup.classList.toggle("active");
	}

	function restorePassword() {
		Swal.fire({
			title: "Enter your email",
			text: "You will receive a link to reset your password.",
			input: "email",
			confirmButtonColor: "black",
			cancelButtonColor: "var(--color-fourth)",
			inputAttributes: {
				autocapitalize: "off",
			},
			showCancelButton: true,
			confirmButtonText: "Send",
			showLoaderOnConfirm: true,
		})
			.then((result) => console.log("Result", result))
			.catch((err) => console.log("Catch error:", err))
			.finally(() => console.log("End of promise"));
	}

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const [userStorage, setUserStorage] = useLocalStorage("user", "");
	const [passwordStorage, setPasswordStorage] = useLocalStorage("password", "");

	function login(user, password) {
		setLoginValue(true);
		setUserStorage(user);
		setPasswordStorage(password);
	}

	function handleUser(e) {
		setUser(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	const [signupRepeatPassword, setSignupRepeatPassword] = useState("");

	const [firstNameStorage, setFirstNameStorage] = useLocalStorage(
		"firstName",
		""
	);
	const [lastNameStorage, setLastNameStorage] = useLocalStorage("lastName", "");
	const [emailStorage, setEmailStorage] = useLocalStorage("email", "");
	const [phoneStorage, setPhoneStorage] = useLocalStorage("phone", "");
	const [signupPasswordStorage, setSignupPasswordStorage] = useLocalStorage(
		"password",
		""
	);

	function signup(
		firstName,
		lastName,
		email,
		phone,
		signupPassword,
		signupRepeatPassword
	) {
		setLoginValue(true);
		setFirstNameStorage(firstName);
		setLastNameStorage(lastName);
		setEmailStorage(email);
		setPhoneStorage(phone);
		setSignupPasswordStorage(signupPassword);
		Swal.fire({
			position: 'center',
			icon: 'success',
			iconColor: 'black',
			title: 'Welcome',
			text: 'Thanks for been part of our community',
			showConfirmButton: false,
			timer: 2500
		});
	}

	function handleFirstName(e) {
		setFirstName(e.target.value);
	}

	function handleLastName(e) {
		setLastName(e.target.value);
	}

	function handleEmail(e) {
		setEmail(e.target.value);
	}

	function handlePhone(e) {
		setPhone(e.target.value);
	}

	function handleSignupPassword(e) {
		setSignupPassword(e.target.value);
	}

	function handleSignupRepeatPassword(e) {
		setSignupRepeatPassword(e.target.value);
	}

	// FILTERS LOGIC
	const [filterStorage, setFilterStorage] = useLocalStorage("filters", []);
	const [postFiltered, setPostFiltered] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState({
		casual: false,
		formal: false,
		high: false,
		sport: false,
		trend: false,
		women: false,
		men: false,
		dark: false,
		light: false,
		color: false,
	});

	useEffect(() => {
		setFilterStorage(postFiltered);
	});

	function handleOnCheckbox(e) {
		setSelectedFilter({
			...selectedFilter,
			[e.target.value]: e.target.checked,
		});

		if (e.target.checked) {
			const filterValues = Posts.filter(
				(item) =>
					item.category === e.target.value ||
					item.color === e.target.value ||
					item.gender === e.target.value
			);
			setPostFiltered([...postFiltered, ...filterValues]);
		} else {
			const filterValues = postFiltered.filter(
				(item) =>
					item.category !== e.target.value &&
					item.color !== e.target.value &&
					item.gender !== e.target.value
			);
			setPostFiltered([...filterValues]);
		}
	}

	function changeColor(value) {
		const colorValue = document.querySelector(`.label-${value}`);
		colorValue.classList.toggle("active");
	}

	const nextLink = document.querySelector(".next-link");
	const allLink = document.querySelector(".all-link");

	if (filterStorage.length > 0 && nextLink && allLink) {
		allLink.style.display = "none";
		nextLink.style.display = "flex";
	} else if (nextLink && allLink) {
		nextLink.style.display = "none";
		allLink.style.display = "flex";
	};

	function loginWith() {
		Swal.fire({
			position: 'center',
			icon: 'info',
			iconColor: 'black',
			title: 'Coming soon...',
			showConfirmButton: false,
			timer: 1500
		});
	};

	if (!loginValue && !adminValue) {
		return (
			<div className="home-container animate__animated">
				<div className="home-top-container">
					<div>
						<p className="home-logo">FL.</p>
					</div>
					<div className="home-switch-container">
						<button className="home-switch" onClick={togleMode}>
							<span className="span-login">Login</span>
							<span className="span-signup">Signup</span>
						</button>
					</div>
				</div>

				<div className="home-bottom-container">
					<div className="login-container">
						<div className="login-options-container">
							<button className="login-option-button" onClick={loginWith}>
								<svg
									className="login-option-icon"
									width="27"
									height="28"
									viewBox="0 0 27 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.7198 27.3084C17.2368 27.3084 20.1943 26.1094 22.3525 24.0844C24.8304 21.7397 26.2426 18.3292 26.2426 14.2793C26.2426 13.1869 26.1627 12.3876 25.9761 11.5616H13.7198V16.4908H20.9137C20.7539 17.7164 19.9812 19.5815 18.2493 20.8071C17.1302 21.6065 15.6648 22.1394 13.7198 22.1394C10.256 22.1394 7.32514 19.8213 6.28601 16.624C6.01957 15.798 5.8597 14.9188 5.8597 13.9862C5.8597 13.0537 6.01957 12.1744 6.28601 11.3484C7.32514 8.12447 10.256 5.80641 13.7198 5.80641C16.171 5.80641 17.823 6.89883 18.7555 7.80473L22.4325 4.12782C20.1943 1.96963 17.2368 0.664062 13.7198 0.664062C8.60406 0.664062 4.20775 3.64822 2.04957 7.99124C1.1703 9.80306 0.664062 11.8547 0.664062 13.9862C0.664062 16.1178 1.1703 18.1427 2.04957 19.9545C4.18111 24.3242 8.60406 27.3084 13.7198 27.3084Z"
										fill="var(--color-black)"
									/>
								</svg>
								<span className="login-option-text">Continue with Google</span>
							</button>

							<button className="login-option-button" onClick={loginWith}>
								<svg
									className="login-option-icon"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.6026 29.3327V15.9993H21.2826L21.7893 11.386H17.6026L17.6293 9.09268C17.6293 7.89268 17.7359 7.25268 19.4426 7.25268H21.7626V2.66602H18.0826C13.6559 2.66602 12.0826 4.87935 12.0826 8.63935V11.386H9.33594V15.9993H12.0826V29.3327H17.6026Z"
										fill="var(--color-black)"
									/>
								</svg>
								<span className="login-option-text">Continue with Facebook</span>
							</button>

							<button className="login-option-button" onClick={loginWith}>
								<svg
									className="login-option-icon"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16 0C24.8368 0 32 7.34389 32 16.4047C32 23.6511 27.4208 29.7983 21.0672 31.9695C20.256 32.1311 19.968 31.6188 19.968 31.182C19.968 30.6412 19.9872 28.8749 19.9872 26.6797C19.9872 25.1501 19.4752 24.1518 18.9008 23.643C22.464 23.2366 26.208 21.8492 26.208 15.5484C26.208 13.7564 25.5872 12.2941 24.56 11.1453C24.7264 10.7309 25.2752 9.06233 24.4032 6.80313C24.4032 6.80313 23.0624 6.36356 20.008 8.48516C18.7296 8.12196 17.36 7.93921 16 7.93281C14.64 7.93921 13.272 8.12196 11.9952 8.48516C8.9376 6.36356 7.5936 6.80313 7.5936 6.80313C6.7248 9.06233 7.2736 10.7309 7.4384 11.1453C6.416 12.2941 5.79041 13.7564 5.79041 15.5484C5.79041 21.8332 9.52641 23.2419 13.08 23.6563C12.6224 24.0659 12.208 24.7884 12.064 25.8492C11.152 26.2684 8.8352 26.9939 7.408 24.4867C7.408 24.4867 6.5616 22.9105 4.9552 22.7953C4.9552 22.7953 3.3952 22.7746 4.8464 23.7922C4.8464 23.7922 5.8944 24.2962 6.6224 26.1922C6.6224 26.1922 7.56161 29.1201 12.0128 28.1281C12.0208 29.4993 12.0352 30.7916 12.0352 31.182C12.0352 31.6156 11.7408 32.1231 10.9424 31.9711C4.584 29.8031 0 23.6527 0 16.4047C0 7.34389 7.1648 0 16 0Z"
										fill="var(--color-black)"
									/>
								</svg>
								<span className="login-option-text">Continue with GitHub</span>
							</button>
						</div>

						<div className="login-form-container">
							<form
								className="login-form"
								onSubmit={() => login(user, password)}
							>
								<label className="login-label">
									<svg 
										className="login-icon"
										width="16"
										height="20"
										viewBox="0 0 16 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.7506 11.9953C14.9927 11.9953 15.9995 13.0021 15.9995 14.2442V14.8196C15.9995 15.7139 15.6799 16.5787 15.0984 17.2581C13.529 19.0916 11.1418 19.9964 7.99649 19.9964C4.85059 19.9964 2.46458 19.0913 0.89828 17.257C0.31851 16.5781 0 15.7146 0 14.8218V14.2442C0 13.0021 1.00685 11.9953 2.24887 11.9953H13.7506ZM13.7506 13.4953H2.24887C1.83528 13.4953 1.5 13.8306 1.5 14.2442V14.8218C1.5 15.3575 1.69111 15.8756 2.03896 16.2829C3.29227 17.7506 5.25815 18.4964 7.99649 18.4964C10.7348 18.4964 12.7024 17.7506 13.9588 16.2827C14.3078 15.875 14.4995 15.3561 14.4995 14.8196V14.2442C14.4995 13.8306 14.1642 13.4953 13.7506 13.4953ZM7.99649 0C10.7579 0 12.9965 2.23858 12.9965 5C12.9965 7.76143 10.7579 10 7.99649 10C5.23503 10 2.99645 7.76143 2.99645 5C2.99645 2.23858 5.23503 0 7.99649 0ZM7.99649 1.5C6.06349 1.5 4.49645 3.06701 4.49645 5C4.49645 6.933 6.06349 8.50002 7.99649 8.50002C9.92949 8.50002 11.4965 6.933 11.4965 5C11.4965 3.06701 9.92949 1.5 7.99649 1.5Z"
											fill="var(--color-black)"
										/>
									</svg>

									<input
										className="login-input"
										required
										id="user"
										name="user"
										value={user}
										onChange={handleUser}
										type="text"
										placeholder="Email or Phone"
									/>
								</label>

								<label className="login-label">
									<svg
										className="login-icon"
										width="16"
										height="20"
										viewBox="0 0 16 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0C10.2091 0 12 1.79086 12 4V6H13.75C14.9926 6 16 7.00736 16 8.25V17.75C16 18.9926 14.9926 20 13.75 20H2.25C1.00736 20 0 18.9926 0 17.75V8.25C0 7.00736 1.00736 6 2.25 6H4V4C4 1.79086 5.79086 0 8 0ZM13.75 7.5H2.25C1.83579 7.5 1.5 7.83579 1.5 8.25V17.75C1.5 18.1642 1.83579 18.5 2.25 18.5H13.75C14.1642 18.5 14.5 18.1642 14.5 17.75V8.25C14.5 7.83579 14.1642 7.5 13.75 7.5ZM8.0001 11.5C8.8286 11.5 9.5001 12.1716 9.5001 13C9.5001 13.8284 8.8286 14.5 8.0001 14.5C7.1717 14.5 6.5001 13.8284 6.5001 13C6.5001 12.1716 7.1717 11.5 8.0001 11.5ZM8 1.5C6.6193 1.5 5.5 2.61929 5.5 4V6H10.5V4C10.5 2.61929 9.3807 1.5 8 1.5Z"
											fill="var(--color-black)"
										/>
									</svg>

									<input
										className="login-input"
										required
										id="password"
										name="password"
										value={password}
										onChange={handlePassword}
										type="password"
										placeholder="Password"
									/>
								</label>

								<input
									type="button"
									onClick={restorePassword}
									value="Forgot password?"
									className="login-forgot"
								/>

								<input
									className="login-submit"
									type="submit"
									value="Continue"
								/>
							</form>
						</div>
					</div>

					<div className="signup-container">
						<form
							className="signup-form"
							onSubmit={() =>
								signup(
									firstName,
									lastName,
									email,
									phone,
									signupPassword,
									signupRepeatPassword
								)
							}
						>
							<input
								className="signup-input"
								required
								id="firstName"
								name="firstName"
								value={firstName}
								onChange={handleFirstName}
								type="text"
								placeholder="First name"
							/>
							<input
								className="signup-input"
								required
								id="lastName"
								name="lastName"
								value={lastName}
								onChange={handleLastName}
								type="text"
								placeholder="Last name"
							/>
							<input
								className="signup-input"
								required
								id="email"
								name="email"
								value={email}
								onChange={handleEmail}
								type="email"
								placeholder="Email"
							/>
							<input
								className="signup-input"
								required
								id="phone"
								name="phone"
								value={phone}
								onChange={handlePhone}
								type="tel"
								placeholder="Phone"
							/>
							<input
								className="signup-input"
								required
								id="signPassword"
								name="signPassword"
								value={signupPassword}
								onChange={handleSignupPassword}
								type="password"
								placeholder="Password"
							/>
							<input
								className="signup-input"
								required
								id="signRepeatPassword"
								name="signRepeatPassword"
								value={signupRepeatPassword}
								onChange={handleSignupRepeatPassword}
								type="password"
								placeholder="Repeat password"
							/>

							<input className="signup-submit" type="submit" value="Continue" />
						</form>
					</div>
				</div>
			</div>
		);
	} else if (loginValue || adminValue) {
		return (
			<div>
				<div className="animate__animated home-loged-container">
					<div className="home-title-container">
						<h3 className="home-title">Choose your favorites</h3>
					</div>

					<div className="home-filters-container">
						<label className="home-filter-label label-casual">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("casual")}
								name="filter"
								type="checkbox"
								id="casual"
								value="casual"
							/>
							Casual
						</label>
						<label className="home-filter-label label-formal">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("formal")}
								name="filter"
								type="checkbox"
								id="formal"
								value="formal"
							/>
							Formal
						</label>
						<label className="home-filter-label label-high">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("high")}
								name="filter"
								type="checkbox"
								id="high"
								value="high"
							/>
							High Fashion
						</label>
						<label className="home-filter-label label-sport">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("sport")}
								name="filter"
								type="checkbox"
								id="sport"
								value="sport"
							/>
							Sport
						</label>
						<label className="home-filter-label label-trend">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("trend")}
								name="filter"
								type="checkbox"
								id="trend"
								value="trend"
							/>
							Top Trend
						</label>
						<label className="home-filter-label label-women">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("women")}
								name="filter"
								type="checkbox"
								id="women"
								value="women"
							/>
							Women
						</label>
						<label className="home-filter-label label-men">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("men")}
								name="filter"
								type="checkbox"
								id="men"
								value="men"
							/>
							Men
						</label>
						<label className="home-filter-label label-dark">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("dark")}
								name="filter"
								type="checkbox"
								id="dark"
								value="dark"
							/>
							Dark
						</label>
						<label className="home-filter-label label-light">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("light")}
								name="filter"
								type="checkbox"
								id="light"
								value="light"
							/>
							Light
						</label>
						<label className="home-filter-label label-color">
							<input
								className="home-filters-input"
								onChange={handleOnCheckbox}
								onClick={() => changeColor("color")}
								name="filter"
								type="checkbox"
								id="color"
								value="color"
							/>
							Color
						</label>
					</div>

					<div className="home-links-container">
						<Link
							className="animate__animated animate__fadeIn all-link"
							to={"/feed"}
						>
							View all
						</Link>
						<Link
							className="animate__animated animate__fadeIn next-link"
							to={"/feed"}
						>
							Next
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;