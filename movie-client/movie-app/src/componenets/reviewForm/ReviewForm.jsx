import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ rv, setr }) => {
  const [arr1, setArr1] = useState({ value: '' });

  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please add your reviews</Form.Label>
        <Form.Control value={arr1.value} onChange={(e) => setArr1( {value: e.target.value})} as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-info" onClick={() => {
        rv = { ...rv, reviewBody: arr1.value }
       
         axios.post("http://localhost:8080/api/v1/reviews", {
          imdbId: rv.imdbId,
          reviewBody: rv.reviewBody
        }).then( (res)=> { console.log( res)
        setr(res.data.reviewIds)
        } )
       
        
        setArr1({value:''})

        console.log()
        
      }}>Submit</Button>
    </Form>

  )
}

export default ReviewForm