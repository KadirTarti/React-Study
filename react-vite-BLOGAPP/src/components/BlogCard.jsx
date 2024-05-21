import React from 'react'

const BlogCard = ({categoryId, content, image, title, isPublish}) => {
  

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const showBlog = async (e) => {
        e.preventDefault();
        const {target} = e;
        const blogData = {
            "categoryId": "",
            "title": target.title.value,
            "content": target.content.value,
            "image": target.image.value,
            "isPublish": true
        }

    try {
        const response = await axios('/blogs', blogData);
        console.log('response', response);
        // Yanıtın data özelliğinden token'i alıyoruz
        if (response.data && response.data.token) {
            dispatch(setToken(response.data.token));
            dispatch(setCurrentUser(response.data.user));
            navigate('/dashboard')
        } else {
            console.error('Token bulunamadı:', response);
        }
    } catch (err) {
        console.error('API İsteği Sırasında Hata:', err);
    }
  
  
    return (
    <div>yazdır</div>
  )
}

export default BlogCard