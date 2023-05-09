import { useEffect, useRef, useState } from 'react';

import SvgIcon from '../svgIcon/svgIcon';

import styles from './customSelect.module.scss';

const CustomSelect = ({ className, defaultLabel, options, onChange }) => {
  const [visibleSelect, setVisibleSelect] = useState(false);
  const sortRef = useRef(null);

  const toggleVisibleSelect = () => {
    setVisibleSelect(!visibleSelect);
  };

  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisibleSelect(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => setVisibleSelect(false);
  }, []);

  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className={`${className} ${styles.select}`} ref={sortRef}>
      <button
        onClick={toggleVisibleSelect}
        className={styles.select__btn}
        type="button"
      >
        {defaultLabel}
        <SvgIcon
          name="arrow-down"
          size="15"
          className={
            styles.select__icon +
            (visibleSelect ? ` ${styles.select__icon_active}` : '')
          }
        />
      </button>
      {visibleSelect && (
        <ul className={styles.select__list}>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className={styles.select__option}
                  type="button"
                  onClick={() => handleChange(option.value)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
