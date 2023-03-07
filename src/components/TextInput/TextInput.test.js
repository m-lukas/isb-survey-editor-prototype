import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TextInput from "./TextInput";

const makeSut = (props) => {
    return render(
        <TextInput 
            label='label'
            onUpdate={jest.fn()}
            identifier='identifier'
            {...props}
        />
    )
}

describe('<TextInput />', () => {
    it('should render label correctly', () => {
        const { getByText } = makeSut({ label: 'Message' })

        expect(getByText(/Message/)).toBeInTheDocument()
    })
    
    it('should render text input correctly', () => {
        const { getByRole } = makeSut()

        expect(getByRole('textbox')).toBeInTheDocument()
    })

    it('calls onUpdate function when input field is changed', () => {
        const mock = jest.fn()
        const { getByRole } = makeSut({ onUpdate: mock })

        fireEvent.change(getByRole('textbox'), {target: {value: 'hi'}})
        expect(mock).toHaveBeenCalled()
    })
})