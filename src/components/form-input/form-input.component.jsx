import React from 'react';

import './form-input.styles.js';
import { GroupContainer,FormInputLabel } from './form-input.styles.js';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
      <FormInput onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );

export default FormInput;