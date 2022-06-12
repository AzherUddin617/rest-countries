import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'

function Test() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-primary-dark">
        testing

        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet open={open}>My awesome content here</BottomSheet>
    </div>
  )
}

export default Test;