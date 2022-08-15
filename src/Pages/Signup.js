import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function Signup() {
          return (
                    <div>
                              <form id="form-signup">
                                        <Input label="Name" id="name"></Input>
                                        <Input label="Email" id="email"></Input>
                                        <Input label="Username" id="username"></Input>
                                        <Input label="Password" id="password"></Input>
                                        <Input label="Confirm Password" id="confrim-password"></Input>
                                        <Button buttonName="Sign-up" name="btn-submit" type="submit" form="form-signup" />
                              </form>
                    </div>
          )
}

export default Signup
