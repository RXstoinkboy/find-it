import React from 'react'
import {SearchModule} from '../SearchModule'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

it(`SearchModule renders correctly`, ()=> {
    const props = {
        city: 'city',
        keywordToSearch: 'word',
        autocompleteResults: [1,2],
        cities: [3,4],
        lat: 1,
        long: 2,
        getLocation: jest.fn(),
        searchKeyword: jest.fn(),
        autocomplete: jest.fn(),
        latLong: jest.fn(),
        getBusinessesList: jest.fn()
    }
    const search = shallow(
            <SearchModule 
                {...props}
            />
        )

    expect(toJson(search)).toMatchSnapshot()
})