import React from 'react'
import UiPage from "../../components/UiPage";
import {books} from "../../mockData/booksList";

const NotFoundPage = () => {
  const book = books[0];
	return   (
  <div>
    <UiPage book={book} />
  </div>
  )
}

export default NotFoundPage
