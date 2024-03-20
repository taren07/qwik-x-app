import { component$ } from "@builder.io/qwik";
import * as styles from "./post.css";

export default component$(() => {
	return (
		<container class={styles.container}>
			<div class={styles.discussionHeader}>
				<div class={styles.discussion}>
					{/* <div class="authed-user">
						<div class={styles.comment}>
							<div class={styles.avatar}></div>
							<div class="comment__body">
								<div class={styles.commentAuthor}>
									<time class={styles.commentDate}></time>
								</div>
								<div class={styles.commentText}></div>
							</div>
						</div>
					</div> */}

					<form id="newcomment__form">
						<textarea required placeholder="Write a comment"></textarea>
						<div class={styles.newCommentToolbar}>
							<button
								id="reset-button"
								class={styles.buttonPrimary}
								type="button"
							>
								Reset
							</button>
							<button
								id="confirm-button"
								class={styles.buttonPrimary}
								type="submit"
							>
								Comment
							</button>
						</div>
					</form>
				</div>
				<div class="discussion__comments">
					{/* <!-- will be generated --> */}
				</div>
			</div>
		</container>
	);
});
