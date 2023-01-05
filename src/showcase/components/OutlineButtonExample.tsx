import OutlineButton from '@/layout/Button/OutlineButton'

const OutlineButtonExample = () => {
  return (
    <>
      <OutlineButton text="Primary" bgColor="primary" size="small" />
      <OutlineButton text="Secondary" bgColor="secondary" />
      <OutlineButton text="Error" bgColor="error" />
      <OutlineButton text="Disable" bgColor="disabled" />
      <OutlineButton text="Submit" size="medium" />
    </>
  )
}

export default OutlineButtonExample
