import Button from '@/layout/Button/Button'

const ButtonExample = () => {
  return (
    <>
      <Button text="Primary" bgColor="primary" size="small" />
      <Button text="Secondary" bgColor="secondary" size="medium" />
      <Button text="Error" bgColor="error" size="large" />
      <Button text="Disable" bgColor="disabled" />
      <Button text="Submit" />
    </>
  )
}

export default ButtonExample
