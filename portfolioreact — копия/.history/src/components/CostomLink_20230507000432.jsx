import {Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
  const match = useMatch(to)
  return (
    <div>

    </div>
  )
}

export {CustomLink};