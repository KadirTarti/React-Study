import React from 'react'

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />        
          <Route path="blog" element={<PrivateRouter />}>
            <Route path="" element={<Dashboard />}>
              <Route path="/blog/myblog" element={<MyBlog/>} />
              <Route path="newblog" element={<NewBlog/>} />
              <Route path="profile" element={<Profile/>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    );
  };
export default AppRouter