import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {SearchKeyword} from '../SearchKeyword'

it(`SearchKeyword renderd correctly`, ()=> {
    const props = {
        handleSearch: jest.fn(),
        keywordToSearch: 'wiel'
    }
    const searchKeyword = shallow(
            <SearchKeyword 
                {...props}
            />
        )
    expect(toJson(searchKeyword)).toMatchSnapshot()
})
