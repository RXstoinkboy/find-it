import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {SearchButton} from '../SearchButton'

it(`SearchButton renders correctly`, ()=> {
    const mockFn = jest.fn();
    const searchButton = shallow(
        <SearchButton onClick={mockFn} handleGetBusinessesList={mockFn}/>
    )

    searchButton.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
    expect(toJson(searchButton)).toMatchSnapshot();
})