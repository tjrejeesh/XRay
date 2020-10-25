import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import logo from "../assets/Annalise logotype.svg";

describe('Render header component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });
    test('Render image with logo', () => {
        expect(wrapper.contains(<header>
            <img src={logo} alt="logo"/>
        </header>)).toBe(true);
    });
});


