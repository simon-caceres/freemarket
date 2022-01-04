import React from 'react';
import '@testing-library/jest-dom'
import {render, fireEvent, queryByAttribute} from '@testing-library/react'
import { ItemCard } from '../components';

test('go to item detail', () => {
    const item = {
        id: 1,
        title: 'macbook pro',
        thumbnail: 'https://falabella.scene7.com/is/image/Falabella/15746612_1?wid=1500&hei=1500&qlt=70',
        price: '200000',
        address: {
            state_name: 'zaragoza'
        }
    }
    const onClick = jest.fn();
    const getById = queryByAttribute.bind(null, 'id');
    const view = render( <ItemCard id={item.id} item={item} navigateToItemInfo={onClick} /> );

    expect(view.container).toHaveTextContent(item.title);
     
    const click = getById(view.container, `item${item.id}`);

    fireEvent.click(click)

    expect(onClick).toHaveBeenCalledTimes(1);
})
