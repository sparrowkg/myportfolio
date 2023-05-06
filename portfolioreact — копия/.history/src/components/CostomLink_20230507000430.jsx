import {Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
  const match = useMatch()
  return (
    <div>

    </div>
  )
}

export {CustomLink};