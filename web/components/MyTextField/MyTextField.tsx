import { useField } from 'formik'
import { TextField } from '@material-ui/core'
import { FC } from 'react'

const MyTextField: FC<any> = ({ className, errors, fullWidth, label, type, ...props }) => {
  const [field, meta] = useField(props)

  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      className={className}
      {...field}
      type={type}
      label={label}
      fullWidth
      helperText={errorText}
      error={!!errorText}
    />
  )
}

export default MyTextField