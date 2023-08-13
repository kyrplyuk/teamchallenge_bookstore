import React from 'react'
import UiPage from "../../components/UiPage";
import {books} from "../../mockData/booksList";
import RegistrForm from '../../components/Registr';
import LoginForm from '../../components/Login';

const NotFoundPage = () => {
  const book = books[0];
	return   (
  <div>
    <LoginForm/>
  </div>
  )
}

export default NotFoundPage
