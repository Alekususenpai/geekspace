import React from 'react'

function Button({ name, type, buttonName, form }) {
          return (
                    <div className="btn-wrapper">
                              <button name={name} type={type} form={form}>{buttonName}</button>
                    </div>
          )
}

export default Button
