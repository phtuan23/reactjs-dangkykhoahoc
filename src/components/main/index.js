import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Course from './page/course';
import Home from './page/home';
import About from './page/about';
import Blog from './page/blog';
import RegisterCourse from './page/register.course';
import CourseDetail from './page/course.detail';
import BlogDetail from './page/blog.detail';
import Contact from './page/contact';
import Login from './login';
import Register from './register';
import ScrollToTop from './scroll.to.top';
import CheckScore from './check-score';

const IndexPage = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/check-mark" exact component={CheckScore} />
                <>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/course" exact component={Course} />
                    <Route path="/course/c/:title" component={Course} />
                    <Route path="/course/:slug" exact component={CourseDetail} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" component={BlogDetail} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/register-course" exact component={RegisterCourse} />
                    <Footer />
                </>
            </Switch >
        </ScrollToTop>
    )
}

export default IndexPage;