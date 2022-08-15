import React from 'react'

function Input({ label, id }) {
          return (
                    <div className="input-wrapper">
                              <label for={id}>{label}</label>
                              <input type="text" id={id} name={id}></input>
                    </div >
          )
}

export default Input
