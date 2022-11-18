import { useRef } from "react"
import { Button, Form, Stack } from "react-bootstrap"

const NewDeviceForm = ({feilds}) => {

    const nameRef = useRef(null)
    const labelRef = useRef(null)
    const latRef = useRef(null)
    const lonlRef = useRef(null)

  return (
    <Form>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control required ref={nameRef} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Label</Form.Label>
            <Form.Control required ref={labelRef} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Add to Feild</Form.Label>
            <Form.Select disabled={false}>
                <option value="none">Assign Later</option>
                {feilds.map(feild=>{
                    return(
                        <option value={feild._id}>{feild.name}</option>
                    )
                })}
            </Form.Select>
        </Form.Group>
        <Stack>
            <Button>Save</Button>
        </Stack>
    </Form>
  )
}

export default NewDeviceForm