import React, {Component} from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'
import Category from './Category'
import {Link} from 'react-router-dom'
import styles from '../App.css';


const CategoriesList = ({categories, loadPostsForCategory}) => {
    categories = categories || [];
    return (
        <div className='categories-list'>
            <h3 className='categories-header'>
                Categories
            </h3>
            <ol>
                {categories.map((category, index) => (
                    <li key={index} onClick={(e) => loadPostsForCategory(category)}>
                        <Link to={category.path} className='add-book'>{category.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )

}

CategoriesList.propTypes = {
    categories: PropTypes.array.isRequired,
    loadPostsForCategory: PropTypes.func.isRequired

};
export default CategoriesList;