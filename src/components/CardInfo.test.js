import React from "react";
import { render } from "@testing-library/react";

import CardInfo from "./CardInfo";
const makeSut = (props) => {
    return render(
        <CardInfo 
            step_type='1'
            uid='12345'
            {...props}
        />
    )
}

describe('<CardInfo />', () => {
    it('renders step type', () => {
        const { getByText } = makeSut({ step_type: '3' })

        expect(getByText('3')).toBeInTheDocument()
    })
    it('renders uid', () => {
        const { getByText } = makeSut({ uid: 'IAMID' })

        expect(getByText('IAMID')).toBeInTheDocument()
    })
})