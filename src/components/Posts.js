import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload';

const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) =>
      <LazyLoad>
        <li key={i}>{post.title}</li>
      </LazyLoad>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
