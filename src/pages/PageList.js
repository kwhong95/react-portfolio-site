import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Layouts from '../layouts'

const PageList = [
  {
    exact: true,
    path: '/',
    component: Home,
    layout: Layouts,
  },
  {
    exact: false,
    path: '/about',
    component: About,
    layout: Layouts,
  },
  {
    exact: false,
    path: '/project',
    component: Project,
    layout: Layouts,
  },
  {
    exact: false,
    path: '/contact',
    component: Contact,
    layout: Layouts,
  }
]

export default PageList
