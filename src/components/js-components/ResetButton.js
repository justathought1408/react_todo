import '../css-components/ResetButton.css'
import Post from './Post'

export default function ResetButton(props) {
	const {count, setCount, completedCount,setCompletedCount} = props;
	const animationReset = () => {
		document.querySelector('.ResetButton__btn').classList.add('ResetButton__btn-animation');
		setTimeout(() => 
		document.querySelector('.ResetButton__btn').classList.remove('ResetButton__btn-animation'), 400)
	}
	return (
			<div className="ResetButton__row">
				<p className="ResetButton__hint">reset</p>
				<button className="ResetButton__btn" 
					onClick={(event) => {
						document.querySelectorAll('.Post__row').forEach(el => el.remove());
						setCount(0);
						document.querySelector('.App__text').innerHTML = 'ToDo List is Empty';
						animationReset();
						if (document.querySelector('.App__text').innerHTML == 'ToDo List is Empty')
							setCompletedCount(0);
					}}
					onMouseOver={() => {
						document.querySelector('.ResetButton__hint').style.opacity = '45%';
					}}
					onMouseOut={() => { 
						document.querySelector('.ResetButton__hint').style.opacity = '0%';
					}
				}></button>
			</div>
		)
};