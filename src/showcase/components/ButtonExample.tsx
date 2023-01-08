import Button from '@/layout/components/Button/Button'

const ButtonExample = () => {
  const handleMousePosition = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.clientX, event.clientY)
  }

  return (
    <div>
      <h5>Button</h5>
      <div>
        <Button variant="primary" size="sm" icon="home">
          Home (sm)
        </Button>

        <Button variant="blueDarker" icon="home">
          Home
        </Button>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div>
        <Button variant="error" onClick={(event) => handleMousePosition(event)}>
          Error
        </Button>
      </div>
      <div>
        <Button variant="disabled">Disabled</Button>
      </div>
      <div>
        <Button size="md">Default</Button>
      </div>
      <div>
        <Button size="md" variant="primary" icon="calendar" />
      </div>
      <div>
        <Button variant="primary" icon="plus" />
        <Button variant="primary" size="sm" icon="plus" />
        <Button variant="blue" size="sm" icon="cog" />
      </div>
    </div>
  )
}

export default ButtonExample
