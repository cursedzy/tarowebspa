// Lazy loading components for better performance
const Home = () => import("../views/HomePage.vue")
const About = () => import("../views/AboutPage.vue")
const Courses = () => import("../views/CoursesPage.vue")
const CourseDetail = () => import("../views/CourseDetail.vue")
const Contact = () => import("../views/ContactPage.vue")
const NotFound = () => import("../views/NotFound.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Главная",
      description: "Профессиональные курсы Таро и консультации",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Обо мне",
      description: "Узнайте больше о моем пути в мире Таро",
    },
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
    meta: {
      title: "Курсы",
      description: "Изучите искусство Таро с профессиональным наставником",
    },
  },
  {
    path: "/courses/:id",
    name: "CourseDetail",
    component: CourseDetail,
    props: true,
    meta: {
      title: "Детали курса",
      description: "Подробная информация о курсе",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Контакты",
      description: "Свяжитесь со мной для консультации",
    },
  },
  // Redirect old paths
  {
    path: "/about-me",
    redirect: "/about",
  },
  {
    path: "/tarot-courses",
    redirect: "/courses",
  },
  // 404 page - must be last
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Страница не найдена",
    },
  },
]

export default routes
