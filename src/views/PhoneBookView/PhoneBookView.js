import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import AddSection from '../../components/AddSection';
import Filter from '../../components/Filter';
import OutputSection from '../../components/OutputSection';
import Notification from '../../components/Notification';
import MyLoader from '../../components/Loader';
import PropTypes from 'prop-types';
import s from './phoneBookView.module.css';
import anim from '../../components/Animations/slide.module.css';
import filterAnim from '../../components/Animations/slide.module.css';

export default function PhoneBookView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

   const clearFilter = useCallback(
    () => dispatch(phoneBookActions.changeFilter('')),
    [dispatch],
  );

  const contacts = useSelector(phoneBookSelectors.getAllContacts);
  const isLoading = useSelector(phoneBookSelectors.getLoading);
  const error = useSelector(phoneBookSelectors.getError);

    return (
      <div className={s.container}>
        {error && <Notification message={error.message} />}

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          {<h1 className={s.title}>Phonebook</h1>}
        </CSSTransition>

        <AddSection />

        <CSSTransition
          in={contacts.length > 1}
          classNames={filterAnim}
          timeout={250}
          unmountOnExit
          onExiting={() => clearFilter()}
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={contacts.length > 0}
          appear={true}
          timeout={250}
          classNames={anim}
          unmountOnExit
        >
          <div className={s.contactsWrapper}>
            <h2 className={s.title}>Contacts</h2>
            {isLoading && <MyLoader />}
            <OutputSection />
          </div>
        </CSSTransition>
      </div>
    );
}