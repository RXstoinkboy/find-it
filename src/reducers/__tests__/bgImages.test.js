import {
    BG_LOAD_START, 
    BG_LOAD_SUCCESS, 
    BG_LOAD_FAILURE,
    NEXT_SLIDE,
    PREV_SLIDE
} from '../../actions/types'
import {bgImages} from '../bgImages'

describe(`bgImages reducer`, ()=>{
    const initialState = {
        currentImage: 0,
        viewportWidth: 0,
        loading: false,
        collectedData: [],
        error: null
    };

    it(`initial state when action is not recognised`, ()=>{
        const fakeAction = {type: 'FAKE_ACTION'};
        expect(bgImages(undefined, fakeAction)).toEqual(initialState);
    });

    it(`returns correct state after BG_LOAD_START`, ()=>{
        const bgLoadStart = {type: BG_LOAD_START};
        expect(bgImages(initialState, bgLoadStart)).toEqual({...initialState, loading: true})
    });

    it(`returns correct state after BG_LOAD_SUCCESS`, ()=>{
        const testData = {name: 'testName', bgImage: 'testImage', url: 'testUrl'};
        const bgLoadSuccess = {type: BG_LOAD_SUCCESS, payload: testData};
        expect(bgImages(initialState, bgLoadSuccess)).toEqual({...initialState, viewportWidth: window.innerWidth, collectedData: [{name: testData.name, image: testData.bgImage, url: testData.url}]})
    });

    it(`return correct state after failure`, ()=> {
        const bgLoadFailure = {type: BG_LOAD_FAILURE, payload: {error: 'err'}};
        expect(bgImages(initialState, bgLoadFailure)).toEqual({...initialState, error: bgLoadFailure.payload.error})
    })

    it(`returns correct state after NEXT_SLIDE`, ()=>{
        const nextSlide = {type: NEXT_SLIDE};

        if(initialState.collectedData.length === 3 && initialState.currentImage === 3){
            expect(bgImages(undefined, nextSlide)).toEqual({...initialState, currentImage: 0});
        } else if(initialState.collectedData.length === 3 && initialState.currentImage === 2){
            expect(bgImages(undefined, nextSlide)).toEqual({...initialState, currentImage: 3});
        }
    });

    it(`returns correct state after NEXT_SLIDE`, ()=>{
        const prevSlide = {type: PREV_SLIDE};

        if(initialState.collectedData.length === 3 && initialState.currentImage === 2){
            expect(bgImages(undefined, prevSlide)).toEqual({...initialState, currentImage: 1});
        } else if (initialState.collectedData.length === 3 && initialState.currentImage === 0){
            expect(bgImages(undefined, prevSlide)).toEqual({...initialState, currentImage: 3});
        }
    })
})