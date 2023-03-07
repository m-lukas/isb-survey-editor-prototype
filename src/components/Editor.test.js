import React from "react";
import { render } from "@testing-library/react";

import Editor from "./Editor";

const makeSut = (props) => {
    return render(
        <Editor {...props}/>
    )
}

describe('<Editor />', () => {
    it('creates correct classes', () => {
        const { container } = makeSut()

        expect(container.getElementsByClassName('editor-layout')).toHaveLength(1)
        expect(container.getElementsByClassName('editor-flex')).toHaveLength(1)
    })

    it('allows children to be added', () => {
        const { getByText } = makeSut({ children:<p>hello world</p> })

        expect(getByText(/hello world/)).toBeInTheDocument()
    })
})