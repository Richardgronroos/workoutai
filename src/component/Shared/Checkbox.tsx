import React from 'react'
import './checkbox.css'
export const Checkbox = () => {
  return (
    <div className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <label htmlFor="cbx" className="cbx"></label>
    </div>
  )
}
