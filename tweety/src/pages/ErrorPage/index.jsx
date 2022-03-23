import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage({ errorName, errorCode }) {
  return (
    <div className="not-found">
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
  errorName: PropTypes.string.isRequired,
  errorCode: PropTypes.string,
};
ErrorPage.defaultProps = {
  errorCode: '',
};
export default ErrorPage;
