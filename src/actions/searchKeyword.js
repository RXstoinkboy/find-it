import {
    SEARCH_KEYWORD
} from './types'

export const searchKeyword = keywordToSearch => {
    return {
        type: SEARCH_KEYWORD,
        payload: {
            keywordToSearch
        }
    }
}