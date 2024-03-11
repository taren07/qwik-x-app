import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class="background">
			<nav class="menu__wrapper">
				<div class="logo__wrapper">
					{/* <!-- logo --> */}
					<a href="#" class="page__title">
						Dashboard
					</a>
				</div>
				<div class="action-buttons">
					<button class="action-button">{/* <!-- svg --> */}</button>
					{/* <!-- more buttons --> */}
					{/* <img 
                        id="avatar-navbar" class="avatar-profile" 
                        src="assets/profile_new.jpg" alt="Profile"
                    > */}
				</div>
			</nav>
			<div class="navigation__menu none">
				<div class="avatar-wrapper">
					{/* <img class="avatar-profile" src="assets/profile_new.jpg" alt="Profile"> */}
					<div class="avatar-name-wrapper">
						<div class="avatar-name-alias">a7v8x</div>
						<div class="avatar-name">David Mraz</div>
					</div>
					<div class="close-button">{/* <!-- close button --> */}</div>
				</div>
				<ul class="navigation__menu__items">
					<li>&#128640; Maximizing the reward function</li>
					<li class="separator"></li>
					<li>{/* <!-- profile icon --> Your Profile */}</li>
					{/* <!-- more items--> */}
				</ul>
			</div>
		</div>
	);
});
