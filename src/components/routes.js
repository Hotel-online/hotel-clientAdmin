import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import PersonList from './persons/List'
import PersonForm from './persons/Form'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon: 'send',
        component: About
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'Catalogo!',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias!',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/persons/list',
        exact: true,
        title: 'Usuarios!',
        icon: 'send',
        component: PersonList
      },
      {
        path: '/catalogo/persons/new',
        exact: true,
        title: 'Person New!',
        icon: 'send',
        component: PersonForm,
        novisible: true
      },
      {
        path: '/catalogo/persons/edit/:id',
        exact: true,
        title: 'Person Edit!',
        icon: 'send',
        component: PersonForm,
        novisible: true
      },
    ]
  }
]

export { routes, routese }