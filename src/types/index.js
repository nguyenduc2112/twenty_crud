import PropTypes from "prop-types";

export const post = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
});
