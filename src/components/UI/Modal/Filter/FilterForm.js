import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';

class FilterForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Container>
                <Form>
                    <Form.Group inline>
                        <label>Type</label>
                        <Form.Checkbox
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Large'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Special</label>
                        <Form.Radio
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Date from' />
                        <Form.Input fluid label='Date to' />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Skin</label>
                        <Form.Checkbox
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Large'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Hair Color</label>
                        <Form.Checkbox
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Large'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Eye Color</label>
                        <Form.Checkbox
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Large'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Size</label>
                        <Form.Checkbox
                            label='Small'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Medium'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Checkbox
                            label='Large'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
};

export default FilterForm;