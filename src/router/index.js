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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
