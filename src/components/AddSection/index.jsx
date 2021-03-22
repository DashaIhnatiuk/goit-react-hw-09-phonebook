import { Component } from 'react';
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './AddSection.module.css';
import notificationTransition from "../Animations/alert.module.css";
import Notification from "../Notification";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import operations from '../../redux/phoneBook/phoneBook-operations';
import selectors from '../../redux/phoneBook/phoneBook-selectors';

export default function AddSection() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const contacts = useSelector(selectors.getAllContacts);

  const dispatch = useDispatch();
  const onAddContact = useCallback(
    (name, number) => dispatch(operations.addContact(name, number)),
    [dispatch],
  );


  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(!name){
      setErrorMessage( 'Enter name please');
      setTimeout(() => {
        setErrorMessage(null);}, 3000);
      return;
    }

    if(!number){
      setErrorMessage( 'Enter number please');
      setTimeout(() => {
        setErrorMessage(null);}, 3000);
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      setErrorMessage('Contact already exists');

      setTimeout(() => {
        setErrorMessage(null);}, 3000);
      resetData();
      return;
    }

    onAddContact(name, number);
    resetData();
  };
  const resetData = () => {
    setName('');
    setNumber('');
  }
  
      return (
        <div className={s.container}>
          <Notification message={errorMessage} />
            <p>Name</p>
            <input type="text" placeholder="Enter contact name" name="name"
              value={name} onChange={handleInput}/>
            <p>Number</p>
            <input type="text" placeholder="Enter phone number" name="number"
              value={number} onChange={handleInput}/>
            <button className={s.addBtn} onClick={handleSubmit}>Add contact</button>
        </div>
      );
    }
