import PropTypes from "prop-types";
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./OutputSection.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideTransition from "../Animations/slide.module.css";
import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import { connect } from "react-redux";

export default function OutputSection() {
  const dispatch = useDispatch();
  const onDeleteContact = useCallback(
    id => dispatch(phoneBookOperations.deleteContact(id)),
    [dispatch],
  );
  const contacts = useSelector(phoneBookSelectors.getFilteredContacts);
  return (
    <TransitionGroup component="ul" className={style.ulSection}>
      {contacts.map(({ id, name, number }) => {
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={slideTransition}
            // unmountOnExit
          >
            <li className={style.liItem} key={id}>
              <p className={style.text}>{name} : {number}</p>
              <button
                className={style.deleteBtn}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}