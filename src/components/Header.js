import { PauseIcon, GlobeAmericasIcon } from "@heroicons/react/24/solid";

function Header({ coins, totalQuestions, currentQue }) {
  return (
    <div className="header">
      {/* Header left */}
      <div className="header__left">
        {/* Pause button */}
        <button className="btn__pause">
          <PauseIcon className="icons" />
        </button>
        {/* Questions count */}
        <div className="questions__count">
          <p>
            {currentQue} / {totalQuestions}
          </p>
        </div>
        {/* Points */}
      </div>
      {/* Header right | Coins */}
      <div className="coin__box">
        <GlobeAmericasIcon className="icons" />
        <p>{coins}</p>
      </div>
    </div>
  );
}

export default Header;
