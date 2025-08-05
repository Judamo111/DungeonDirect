import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductDetails from '../features/catalogue/ProductDetails';
import NotFound from '../features/errors/NotFound';
import Home from '../features/home/HomePage';
import Catalogue from '../features/catalogue/Catalogue';
import AboutUs from '../features/about/AboutUs';
import ContactUs from '../features/contact/ContactUs';
import Cart from '../features/cart/Cart';
import Checkout from '../features/checkout/Checkout';
import OrderSuccess from '../features/checkout/OrderSuccess';
import Account from '../features/account/Account';
import Login from '../features/account/Login';
import Register from '../features/account/Register';
import NewReleases from '/src/features/catalogue/NewReleases';
import Specials from '/src/features/catalogue/Specials';
import WarriorArmor from '/src/features/catalogue/warrior/WarriorArmor';
import WarriorWeapons from '/src/features/catalogue/warrior/WarriorWeapons';
import WarriorShields from '/src/features/catalogue/warrior/WarriorShields';
import WizardPotions from '/src/features/catalogue/wizard/WizardPotions';
import WizardRobes from '/src/features/catalogue/wizard/WizardRobes';
import WizardFoci from '/src/features/catalogue/wizard/WizardFoci';
import BardInstruments from '/src/features/catalogue/bard/BardInstruments';
import BardAttire from '/src/features/catalogue/bard/BardAttire';
import BardSheetMusic from '/src/features/catalogue/bard/BardSheetMusic';
import ThiefTools from '/src/features/catalogue/thief/ThiefTools';
import ThiefPoisons from '/src/features/catalogue/thief/ThiefPoisons';
import ThiefLockpicks from '/src/features/catalogue/thief/ThiefLockpicks';
import RangerRangedWeapons from '/src/features/catalogue/ranger/RangerRangedWeapons';
import RangerTraps from '/src/features/catalogue/ranger/RangerTraps';
import RangerGear from '/src/features/catalogue/ranger/RangerGear';
import ClericVestments from '/src/features/catalogue/cleric/ClericVestments';
import ClericHolyWater from '/src/features/catalogue/cleric/ClericHolyWater';
import ClericIconography from '/src/features/catalogue/cleric/ClericIconography';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {path: '', element: <Home />},
            {path: 'about', element: <AboutUs />},
            {path: 'contact', element: <ContactUs />},
            {path: 'cart', element: <Cart />},
            {path: 'checkout', element: <Checkout />},
            {path: 'order-success', element: <OrderSuccess />},
            {path: 'account', element: <Account />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path: 'products/:id', element: <ProductDetails />},
            {path: 'new-releases', element: <NewReleases />},
            {path: 'specials', element: <Specials />},
            {
                path: 'catalogue',
                element: <Catalogue />,
                children: [
                    {path: 'warrior', element: <Catalogue />},
                    {path: 'wizard', element: <Catalogue />},
                    {path: 'bard', element: <Catalogue />},
                    {path: 'thief', element: <Catalogue />},
                    {path: 'ranger', element: <Catalogue />},
                    {path: 'cleric', element: <Catalogue />},

                    {path: 'warrior/armor', element: <WarriorArmor />},
                    {path: 'warrior/weapons', element: <WarriorWeapons />},
                    {path: 'warrior/shields', element: <WarriorShields />},

                    {path: 'wizard/potions', element: <WizardPotions />},
                    {path: 'wizard/robes', element: <WizardRobes />},
                    {path: 'wizard/foci', element: <WizardFoci />},

                    {path: 'bard/instruments', element: <BardInstruments />},
                    {path: 'bard/attire', element: <BardAttire />},
                    {path: 'bard/sheet-music', element: <BardSheetMusic />},

                    {path: 'thief/tools', element: <ThiefTools />},
                    {path: 'thief/poisons', element: <ThiefPoisons />},
                    {path: 'thief/lockpicks', element: <ThiefLockpicks />},

                    {path: 'ranger/ranged-weapons', element: <RangerRangedWeapons />},
                    {path: 'ranger/traps', element: <RangerTraps />},
                    {path: 'ranger/gear', element: <RangerGear />},

                    {path: 'cleric/vestments', element: <ClericVestments />},
                    {path: 'cleric/holy-water', element: <ClericHolyWater />},
                    {path: 'cleric/iconography', element: <ClericIconography />},
                ]
            },
        ]
    }
]);