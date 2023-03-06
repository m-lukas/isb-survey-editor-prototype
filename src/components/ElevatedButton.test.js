import React from 'react'
import { fireEvent, render } from "@testing-library/react";

import ElevatedButton from './ElevatedButton'

const makeSut = (props) => {
    return render(
        <ElevatedButton 
            text='text'
            href={jest.fn()}
            download='filename'
            {...props}
        />
    )
}
describe('<ElevatedButton />', () => {
    it('should render Button text correctly', () => {
        const { getByText } = makeSut({ text: "My Button" })

        expect(getByText(/My Button/)).toBeInTheDocument()
    })
})