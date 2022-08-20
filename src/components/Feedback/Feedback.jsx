import css from './Feedback.module.css';
import PropTypes from 'prop-types';



export const Feedback = ({ options, onLeaveFeedback}) => {
    return (
        <div className={css.feedback}>
            <div>
                <h2 className={css.feedback__heading}>Please leave feedback</h2>
                <ul className={css.feedback__list}>
                    {options.map(option => (
                        <li>
                            <button
                                onClick={onLeaveFeedback}
                                className={css.feedback__button}
                                name={option}
                                type='button'
                            >
                                {option}
                            </button >
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};