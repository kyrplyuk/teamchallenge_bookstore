import React from 'react'
import UiPage from "../../components/UiPage";
import {books} from "../../mockData/booksList";
import RegistrForm from '../../components/Registr';

const NotFoundPage = () => {
  const book = books[0];
	return   (
  <div>
    <RegistrForm/>
  </div>
  )
}

export default NotFoundPage
