import Button from '@/layout/Button/Button'

const ButtonExample = () => {
  return (
    <>
      <Button text="Primary" bgColor="primary" size="small" />
      <Button text="Secondary" bgColor="secondary" />
      <Button text="Error" bgColor="error" />
      <Button text="Disable" bgColor="disabled" />
      <Button text="Submit" size="medium" />
    </>
  )
}

export default ButtonExample
