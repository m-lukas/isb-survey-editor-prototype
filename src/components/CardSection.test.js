import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CardSection from "./CardSection";

const makeSut = (props) => {
    return render(
        <CardSection 
            label='label'
            enabled={true}
            onClick={jest.fn()}
            {...props}
        />
    )
}

describe('<CardSection />', () => {
    it('is shown if enabled', () => {
        const { container } = makeSut({ enabled:true })

        expect(container.getElementsByClassName('card-section-container')[0]).toBeInTheDocument()
    })

    it('is not shown if disabled', () => {
        const { container } = makeSut({ enabled:false })

        expect(container.getElementsByClassName('hidden')[0]).toBeInTheDocument()
    })

    it('renders label', () => {
        const { getByText } = makeSut({ label: 'Hello World'})

        expect(getByText(/Hello World/)).toBeInTheDocument()
    })

    it('renders children', () => {
        const { getByText } = makeSut({ children: <p>hello world</p>})

        expect(getByText(/hello world/)).toBeInTheDocument()
    })

    it('calls function on click', () => {
        const mock = jest.fn()
        const { getByRole } = makeSut({ onClick: mock })

        fireEvent.click(getByRole('img'))

        expect(mock).toHaveBeenCalled()
    })
})