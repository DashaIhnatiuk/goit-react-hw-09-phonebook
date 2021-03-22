import { Component } from 'react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Notification.module.css';
import { connect } from 'react-redux';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import authSelectors from '../../redux/auth/auth-selectors';
import { CSSTransition } from 'react-transition-group';
import notificationTransition from "../Animations/alert.module.css";

export default function Notification({ message }) {
  const error = useSelector(phoneBookSelectors.getError);
  const authError = useSelector(authSelectors.getError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error || authError) {
      setTimeout(() => {
        dispatch(phoneBookActions.clearError());
      }, 3000);
    }
  }, [dispatch]);

    return (
      <CSSTransition
        in={!!message}
        timeout={250}
        classNames={notificationTransition}
        unmountOnExit
      >
        <div className={s.errorMassage}>
        {message}
    </div>
      </CSSTransition>
    );
  }