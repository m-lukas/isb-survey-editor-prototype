import React from "react";
import { render } from "@testing-library/react";

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
    it('renders required toggle label', () => {
        const { getByText } = makeSut()

        expect(getByText(/Required/)).toBeInTheDocument()
    })

    it('renders ')
})