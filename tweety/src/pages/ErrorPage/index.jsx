import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage({ errorName, errorCode }) {
  return (
    <div data-testid="errorText" className="not-found">
      Error
      {' '}
      {errorCode}
      !
      {' '}
      {errorName}
    </div>
  );
}
ErrorPage.propTypes = {
  errorName: PropTypes.string,
  errorCode: PropTypes.string,
};
ErrorPage.defaultProps = {
  errorName: 'Something Went Wrong!',
  errorCode: '',
};
export default ErrorPage;
