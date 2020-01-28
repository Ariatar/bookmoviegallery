import Vue from "vue";
import VueRouter from "vue-router";
import books from "../views/books.vue";
import book from "../views/book.vue";
import signin from "../views/signin.vue";
import signup from "../views/signup.vue";
import words from "../views/words.vue";
import Home from "../views/Home.vue";
import myOffice from "../views/myOffice.vue";
import store from '../store/index'
import bookPart from '../views/bookPart.vue'



Vue.use(VueRouter);


const routes = [
   {
      path: "/",
      name: "home",
      component: Home
   },
   {
      path: "/myOffice",
      name: "myOffice",
      component: myOffice,
      beforeEnter: guard
   },
   {  
      path: "/books",
      name: "books",
      component: books
   },
   {  
      path: "/book/:id",
      name: "book",
      props: true,
      component: book
   },
   {  
      path: "/book/:bookId:/partId",
      name: "bookPart",
      props: true,
      component: bookPart
   },
   {
      path: "/signin",
      name: "signin",
      component: signin
   },
   {
      path: "/signup",
      name: "signup",
      component: signup
   },
   {
      path: "/words",
      name: "words",
      component: words
   },
   {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
         import(/* webpackChunkName: "about" */ "../views/About.vue")
   }
];

function guard(from, to, next) {
   if (store.getters.isAuth) {
     next();
   } else {
     next("/signin");
   }
 }

const router = new VueRouter({
   
   mode: "history",
   base: process.env.BASE_URL,
   routes
   
});

export default router;
