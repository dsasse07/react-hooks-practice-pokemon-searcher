import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormSubmit }) {

  const [formData, setFormData] = useState({
    name:"",
    hp:"",
    sprites:{
      front: "",
      back: ""
    }
  })

  const {name, hp, sprites:{front, back}} = formData

  function handleFormChange(event){
    const key = event.target.name
    const value = event.target.value
    if (event.target.name === "front" || event.target.name === "back"){
      setFormData({...formData, sprites:{front, back, [key]:value }} )
    } else {
      setFormData({...formData, [key]:value } )
    }
  }

  function handleFormSubmit(event){
    event.preventDefault()
    if (!name || !hp || !front || !back) return
    onFormSubmit(formData)
    setFormData({
      name:"",
      hp:"",
      sprites:{
        front: "",
        back: ""
      }
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={handleFormChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={handleFormChange}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={front}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={back}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
