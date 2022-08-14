import css from './Feedback.module.css';
import PropTypes from 'prop-types';



export const Feedback = ({handleGood, handleNeutral, handleBad}) => {
    return (
        <div className={css.feedback}>
            <div>
                <h2 className={css.feedback__heading}>Please leave feedback</h2>
                <ul className={css.feedback__list}>
                <li>
                    <button
                        onClick={handleGood}
                        className={css.feedback__button}>
                            Good
                    </button >
                </li>
                <li>
                    <button
                        onClick={handleNeutral} 
                        className={css.feedback__button}>
                            Neutral
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleBad} 
                        className={css.feedback__button}>
                            Bad
                    </button>
                </li>
                </ul>
            </div>
        </div>
    );
};

Feedback.protoType = {
    handleGood: PropTypes.func,
    handleNeutral: PropTypes.func,
    handleBad: PropTypes.func,
};