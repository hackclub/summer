import React from 'react'
import styled from 'styled-components'
import { Field, Submit, theme } from '@hackclub/design-system'
import { withFormik } from 'formik'

const Base = styled.form`
  label {
    color: ${theme.colors.gray[3]} !important;
  }
  input[type='text'],
  input[type='url'],
  input[type='number'] {
    background: ${theme.colors.dark} !important;
    border-color: ${theme.colors.dark};
    color: ${theme.colors.white} !important;
    &:focus {
      border-color: ${theme.colors.info};
      box-shadow: none;
    }
    &::placeholder {
      color: ${theme.colors.slate};
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const InnerForm = ({ values, errors, touched, handleChange, handleBlur }) => (
  <Base
    method="get"
    target="_blank"
    action={``}
  >
    <Field
      label="Full Name"
      name="prefill_Full Name"
      placeholder="Sam Poder"
      value={values.first_name}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.first_name && errors.first_name}
      mb={2}
    />
    <Field
      label="Contact Email"
      name="prefill_Contact Email"
      placeholder="sampoder@email.com"
      value={values.last_name}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.last_name && errors.last_name}
      mb={[4, 5]}
    />
    <Submit.lg bg="info" width={1} value="Applications Opening May 1st" />
  </Base>
)
const Signup = withFormik({
  enableReinitialize: true,
  displayName: 'Signup'
})(InnerForm)
export default Signup
