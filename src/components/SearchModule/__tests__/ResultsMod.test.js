import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ResultsMod} from '../ResultsMod'

it(`ResultsMod renders correctly`, ()=> {
    const props = {
        focus: false,
        keywordToSearch: 'hello',
        autocompleteResults: {cats: [], dogs: []},
        handlePickWord: jest.fn()
    }

    const resultsMod = shallow(
        <ResultsMod {...props} />
    )

    expect(toJson(resultsMod)).toMatchSnapshot()
})