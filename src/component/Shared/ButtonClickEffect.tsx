import React from 'react'

export const ButtonClickEffect: React.FC<{
  type: 'button' | 'submit' | 'reset' | undefined
  action?: (args?: any) => void
  title?: string
}> = ({ type, action, title }) => {
  return (
    <div>
      <button onClick={action} type={type} className="click-effect">
        {title ?? 'Submit'}
      </button>
    </div>
  )
}
