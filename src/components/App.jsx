import css from './App.module.css';
import ExpressoCafeFeedbac from '../components/ExpressoСafe/ExpressoCafeFeedbac';



export const App = () => {
  return (
    <div className={css.homework__block}>
      <h1 className={css.homework__feedback}>
        React homework feedback
      </h1>
      <ExpressoCafeFeedbac/>
    </div>
  );
};
