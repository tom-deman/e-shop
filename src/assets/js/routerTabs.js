import Home    from '../../components/Home'
import Contact from '../../components/Contact'
import Shop    from '../../components/Shop'
import Cart    from '../../components/Cart'

export const routerTabs = [
    {
        path     : '/e-shop/',
        component: Home
    },
    {
        path     : '/e-shop/contact',
        component: Contact
    },
    {
        path     : '/e-shop/shop',
        component: Shop
    },
    {
        path     : '/e-shop/cart',
        component: Cart
    }
]
