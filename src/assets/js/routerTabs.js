import Home    from '../../components/Home'
import Contact from '../../components/Contact'
import Shop    from '../../components/Shop'
import Cart    from '../../components/Cart'

export const routerTabs = [
    {
        path     : '/',
        component: Home
    },
    {
        path     : '/contact',
        component: Contact
    },
    {
        path     : '/shop',
        component: Shop
    },
    {
        path     : '/cart',
        component: Cart
    }
]
