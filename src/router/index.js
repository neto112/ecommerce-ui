import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import CategoryView from '../views/Category/CategoryView.vue'
import ProductView from '../views/Product/ProductView.vue'
import AdminView from '../views/AdminView.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import WishList from '../views/Product/WishList.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: ProductView
  },
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
