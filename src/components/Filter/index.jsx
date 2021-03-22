import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import style from "../OutputSection/OutputSection.module.css";

export default function Filter() {
  const dispatch = useDispatch();

  const onChangeFilter = useCallback(event =>
    dispatch(phoneBookActions.changeFilter(event.currentTarget.value)),
  );

  const value = useSelector(phoneBookSelectors.getFilter);

  return (
    <div className={style.ulSection}>
            <p>Find contacts by name</p>
            <input type="text" placeholder="Enter contact name" name="filter"
            value={value} onChange={onChangeFilter}/>
</div>
  );
}