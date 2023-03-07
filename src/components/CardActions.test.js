import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CardActions from "./CardActions";

const makeSut = (props) => {
    return render(
        <CardActions 
            onRequiredToggle={jest.fn()}
            onCopy={jest.fn()}
            onDelete={jest.fn()}
            {...props}
        />
    )
}

describe('<CardActions />', () => {
    describe('Toggle: ', () => {
        it('renders required toggle label', () => {
            const { getByText } = makeSut()
    
            expect(getByText(/Required/)).toBeInTheDocument()
        })
    
        it('renders required toggle initially off', () => {
            const { container } = makeSut()
    
            expect(container.getElementsByClassName('react-toggle')[0]).toHaveAttribute('class', 'react-toggle action-required')
    
        })
    
        it('renders required toggle on after click', () => {
            const { container, getByRole } = makeSut()
    
            fireEvent.click(getByRole('checkbox'))
    
            expect(container.getElementsByClassName('react-toggle')[0]).toHaveAttribute('class', 'react-toggle react-toggle--checked action-required')
        })
    
        it('calls function on click', () => {
            const mock = jest.fn()
    
            const { getByRole } = makeSut({ onRequiredToggle: mock })
    
            fireEvent.click(getByRole('checkbox'))
    
            expect(mock).toHaveBeenCalled()
        })
    })
    
    describe('Copy: ', () => {
        it('should render', () => {
            const { getByAltText } = makeSut()

            expect(getByAltText('copy')).toBeInTheDocument()
        })

        it('should call onCopy on click', () => {
            const mock = jest.fn()
            const { getByAltText } = makeSut({ onCopy: mock })

            fireEvent.click(getByAltText('copy'))

            expect(mock).toHaveBeenCalled()
        })
    })
    describe('Delete: ', () => {
        it('should render', () => {
            const { getByAltText } = makeSut()

            expect(getByAltText('delete')).toBeInTheDocument()
        })

        it('should call onDelete on click', () => {
            const mock = jest.fn()
            const { getByAltText } = makeSut({ onDelete: mock })

            fireEvent.click(getByAltText('delete'))

            expect(mock).toHaveBeenCalled()
        })
    })

})