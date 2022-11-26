import { useState } from 'react'
import '../css-components/Post.css';

export default function Post(props) {
	const { post, count, setCount, completedCount, setCompletedCount } = props;
	return (
		<div className="Post__row">
			<h3 className="Post__title">{post}</h3>
			<div className="Post__btn-row">
				<button className="Post__checkmark-btn" 
					onMouseOver={(event) => {
						event.currentTarget.nextElementSibling.style.opacity = '35%';
					}}
					onMouseOut={(event) => 
						event.currentTarget.nextElementSibling.style.opacity = '0%'
					}
					onClick={(event) => {
						event.currentTarget.closest('.Post__row').classList.toggle('Post__row-completed');
						if (!event.currentTarget.matches('.Post__cancel-btn'))
							setCompletedCount(completedCount + 1);
						if (event.currentTarget.matches('.Post__cancel-btn'))
							setCompletedCount(completedCount - 1);
							event.currentTarget.classList.toggle('Post__cancel-btn')
							event.currentTarget.nextElementSibling.innerHTML = 'cancel';
							event.currentTarget.nextElementSibling.classList.add('Post__cancel-hint');
						if (!event.currentTarget.closest('.Post__row').matches('.Post__row-completed')){
							event.currentTarget.nextElementSibling.innerHTML = 'complete';
							event.currentTarget.nextElementSibling.classList.remove('Post__cancel-hint');
						};
				}}
				></button>
				<p className="Post__completed-hint">complete</p>
				<button className="Post__delete-btn" 
					onMouseOver={(event) => 
						event.currentTarget.nextElementSibling.style.opacity = '45%'
					}
					onMouseOut={(event) => 
						event.currentTarget.nextElementSibling.style.opacity = '0%'
					}
					onClick={(event) => {
						event.currentTarget.closest('.Post__row').remove();
						setCount(count - 1)
						if (event.currentTarget.closest('.Post__row-completed'))
							setCompletedCount(completedCount - 1);
					}}
				></button>
				<p className="Post__delete-hint">delete</p>
			</div>
		</div>
		)
}