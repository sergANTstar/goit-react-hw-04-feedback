import css from './Statistics.module.css';
import PropTypes from 'prop-types';



export const Statistics = ({good, neutral, bad, total, pisitivePercentage}) => {
    return (
        <div className={css.statistics}>
            <div>
                <h2 className={css.statistics__heading}>
                    Statistics
                </h2>
                <ul className={css.statistics__list}>
                    <li className={css.statistics__text}>
                        <p>Good</p>
                        <p className={css.statistics__number}>{good}</p>
                    </li>
                    <li className={css.statistics__text}>
                        <p>Neutral</p>
                        <p className={css.statistics__number}>{neutral}</p>
                    </li>
                    <li className={css.statistics__text}>
                        <p>Bad</p>
                        <p className={css.statistics__number}>{bad}</p>
                    </li>
                </ul>
                <div>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {pisitivePercentage}%</p>
                </div>
            </div>
        </div>
        
    );
};

Statistics.protoType = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    pisitivePercentage: PropTypes.number,
};

