import React from 'react'
import { fireEvent, render } from "@testing-library/react";

import Navbar from './Navbar';

const makeSut = (props) => {
    return render(
        <Navbar 
            saveHref={jest.fn()}
            saveFilename='filename'
            {...props}
        />
    )
}

describe('<Navbar />', () => {
    it('renders ISB title', () => {
        const { getByText } = makeSut()

        expect(getByText(/Impact-Survey-Bot/)).toBeInTheDocument()
    })

    it('should display button with label Save', () => {
        const { getByText } = makeSut()

        expect(getByText(/Save/)).toBeInTheDocument()
    })

    it('should call saveHref function, when clicking the Save Button', () => {
        const mock = jest.fn()
        const { getByText } = makeSut({ saveHref: mock })

        fireEvent.click(getByText(/Save/))

        expect(mock).toHaveBeenCalled()
    })
})