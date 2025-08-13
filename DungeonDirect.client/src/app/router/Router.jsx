import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import ProductDetails from '../../features/catalogue/ProductDetails';
import NotFound from '../errors/NotFound';
import Home from '../../features/home/HomePage';
import Catalogue from '../../features/catalogue/Catalogue';
import AboutUs from '../../features/about/AboutUs';
import ContactUs from '../../features/contact/ContactUs';
import Cart from '../../features/cart/Cart';
import Checkout from '../../features/checkout/Checkout';
import OrderSuccess from '../../features/checkout/OrderSuccess';
import Account from '../../features/account/Account';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import NewReleases from 'src/features/catalogue/NewReleases';
import Specials from 'src/features/catalogue/Specials';
import WarriorArmor from 'src/features/catalogue/warrior/WarriorArmor';
import WarriorWeapons from 'src/features/catalogue/warrior/WarriorWeapons';
import WarriorShields from 'src/features/catalogue/warrior/WarriorShields';
import WizardPotions from 'src/features/catalogue/wizard/WizardPotions';
import WizardRobes from 'src/features/catalogue/wizard/WizardRobes';
import WizardFoci from 'src/features/catalogue/wizard/WizardFoci';
import BardInstruments from 'src/features/catalogue/bard/BardInstruments';
import BardAttire from 'src/features/catalogue/bard/BardAttire';
import BardSheetMusic from 'src/features/catalogue/bard/BardSheetMusic';
import ThiefTools from 'src/features/catalogue/thief/ThiefTools';
import ThiefPoisons from 'src/features/catalogue/thief/ThiefPoisons';
import ThiefLockpicks from 'src/features/catalogue/thief/ThiefLockpicks';
import RangerRangedWeapons from 'src/features/catalogue/ranger/RangerRangedWeapons';
import RangerTraps from 'src/features/catalogue/ranger/RangerTraps';
import RangerGear from 'src/features/catalogue/ranger/RangerGear';
import ClericVestments from 'src/features/catalogue/cleric/ClericVestments';
import ClericHolyWater from 'src/features/catalogue/cleric/ClericHolyWater';
import ClericIconography from 'src/features/catalogue/cleric/ClericIconography';
import AllProducts from 'src/features/catalogue/AllProducts';
import WarriorAll from 'src/features/catalogue/warrior/WarriorAll';
import BardAll from 'src/features/catalogue/bard/BardAll';
import ThiefAll from 'src/features/catalogue/thief/ThiefAll';
import ClericAll from 'src/features/catalogue/cleric/ClericAll';
import WizardAll from 'src/features/catalogue/wizard/WizardAll';
import RangerAll from 'src/features/catalogue/ranger/RangerAll';


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
            {
                path: 'catalogue',
                element: <Catalogue />,
                children: [
                    {path: 'warrior', element: <WarriorAll />},
                    {path: 'wizard', element: <WizardAll />},
                    {path: 'bard', element: <BardAll />},
                    {path: 'thief', element: <ThiefAll />},
                    {path: 'ranger', element: <RangerAll />},
                    {path: 'cleric', element: <ClericAll />},
                    
                    {path: 'all-products', element: <AllProducts />},
                    {path: ':id', element: <ProductDetails />},
                    
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
                    
                    {path: 'specials', element: <Specials />},
                    {path: 'new-releases', element: <NewReleases />},
                ]
            },
        ]
    }
]);