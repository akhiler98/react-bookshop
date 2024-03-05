import { useState } from 'react';
import './Header.scss';
import TopMenu from './TopMenu';
import CurrencySelection from './CurrencySelection';

export default function Header({ currentItem, setCurrentItem }) {

    return (
        <header className="header">
            <div
                className="header__sitename"
                onClick={ () => setCurrentItem('') }
            >
                Flourish and Blotts
            </div>

            <TopMenu currentItem={ currentItem } setCurrentItem={ setCurrentItem }  />

            <CurrencySelection />
        </header>
    )

}
