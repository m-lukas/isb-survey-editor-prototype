import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

const makeSut = (props) => {
    return render(
        <Footer {...props}/>
    )
}

describe('<Footer />', () => {
    it('renders Help link', () => {
        const { getByText } = makeSut()

        expect(getByText('Help')).toBeInTheDocument()
        expect(getByText('Help')).toHaveAttribute('href', '/')
    })
    it('renders About link', () => {
        const { getByText } = makeSut()

        expect(getByText('About')).toBeInTheDocument()
        expect(getByText('About')).toHaveAttribute('href', '/')

    })
    it('renders A2EI link', () => {
        const { getByText } = makeSut()

        expect(getByText('A2EI')).toBeInTheDocument()
        expect(getByText('A2EI')).toHaveAttribute('href', '/')

    })
})