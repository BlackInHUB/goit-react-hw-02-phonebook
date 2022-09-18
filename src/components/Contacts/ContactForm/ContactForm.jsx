import React, { Component } from "react";
import shortid from "shortid";
import { Form, FormLabel, FormInput, SubmitBtn } from "./ContactForm.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: shortid.generate(),
            name: e.target.name.value,
            number: e.target.number.value
    }

        this.props.onSubmit(newContact)
        this.resetForm();
}

    resetForm = () => {
    this.setState({ name: '',
    number: '',})
  }
    
    render() {
                const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormLabel htmlFor="name">Name
                    <br />
                    <FormInput
                        type="text"
                        value={name}
                        name="name"
                        onChange={this.handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </FormLabel>
                <FormLabel htmlFor="number">Number
                    <br />
                    <FormInput
                        type="tel"
                        value={number}
                        name="number"
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormLabel>
                <SubmitBtn type="submit">Add contact</SubmitBtn>
            </Form>
        )
    }

}


export default ContactForm;