import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid
    }`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid
    }`;
  const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid
    }`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid
    }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Ad??n??z</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>L??tfen Ad??n??z?? Yaz??n??z!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Sokak</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>L??tfen Ge??erli Bir sokak Ad?? Yaz??n??z!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Posta Kodu</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>L??tfen Ge??erli Bir Posta Kodu Yaz??n??z (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>??ehir</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>L??tfen Ge??erli Bir ??ehir Yaz??n??z!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Vazge??
        </button>
        <button className={classes.submit}>Onayla</button>
      </div>
    </form>
  );
};

export default Checkout;
