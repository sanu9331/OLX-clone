import React, { useContext, useState, useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';

function Posts() {
  const navigate = useNavigate();
  const { setPostDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        }
      })
      console.log('all post:', allPost);
      setProducts(allPost);

    })
  }, [])

  const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of posts to display

  const postsData = [
    {
      id: 1,
      imageSrc: 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/1208065d1392380082-honda-city-official-review-silver-copy1.jpg',
      price: '₹ 850000',
      type: 'Car',
      name: 'Honda City',
      date: 'Tue May 04 2021',
    },
    {
      id: 2,
      imageSrc: 'https://media.wired.com/photos/65ea34d70264b0ad869cbc18/master/w_2560%2Cc_limit/MacBook-Air-M3-Review-Featured-Gear.jpg',
      price: '₹ 75000',
      type: 'Electronics',
      name: 'Apple MacBook Air',
      date: 'Wed Jun 05 2021',
    },
    {
      id: 3,
      imageSrc: 'https://www.digitaltrends.com/wp-content/uploads/2022/02/samsung-galaxy-s22-ultra-and-s21-ultra-cameras.jpg?fit=2000%2C1333&p=1',
      price: '₹ 50000',
      type: 'Mobile Phone',
      name: 'Samsung Galaxy S21',
      date: 'Thu Jul 06 2021',
    },
    {
      id: 4,
      imageSrc: 'https://i.gadgets360cdn.com/large/Canon_EOS_1500D_back_ndtv_1528790083805.jpg',
      price: '₹ 45000',
      type: 'Camera',
      name: 'Canon EOS 1500D',
      date: 'Fri Aug 07 2021',
    },
    {
      id: 5,
      imageSrc: 'https://www.mingardibiciclette.it/wp-content/uploads/2023/07/img_8548-scaled.jpeg',
      price: '₹ 30000',
      type: 'Bicycle',
      name: 'Trek Marlin 7',
      date: 'Sat Sep 08 2021',
    },
    {
      id: 6,
      imageSrc: 'https://www.ikea.com/us/en/images/products/hyltarp-sofa-w-chaise-right-gransel-gray__1193847_pe901658_s5.jpg?f=s',
      price: '₹ 15000',
      type: 'Furniture',
      name: 'IKEA Sofa',
      date: 'Sun Oct 09 2021',
    },
    {
      id: 7,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHEQJdrxgZ6pQsCwO-UEei8YipJqM5MUEPA&s',
      price: '₹ 60000',
      type: 'Electronics',
      name: 'Dell Inspiron 15',
      date: 'Mon Nov 10 2021',
    },
    {
      id: 8,
      imageSrc: 'https://imageio.forbes.com/specials-images/imageserve/623a3b37a3d246767a57143b/0x0.jpg?format=jpg&crop=1650,928,x428,y408,safe&height=900&width=1600&fit=bounds',
      price: '₹ 7000',
      type: 'Fashion',
      name: 'Nike Air Max',
      date: 'Tue Dec 11 2021',
    },
    {
      id: 9,
      imageSrc: 'https://twobrokewatchsnobs.com/wp-content/uploads/2023/09/rolex-submariner-feature-1.jpg',
      price: '₹ 300000',
      type: 'Accessories',
      name: 'Rolex Submariner',
      date: 'Wed Jan 12 2022',
    },
    {
      id: 10,
      imageSrc: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/reviews/hero-sprint-reaction-27-5t-frame.webp',
      price: '₹ 20000',
      type: 'Bicycle',
      name: 'Hero Sprint Pro',
      date: 'Thu Feb 13 2022',
    },
    {
      id: 11,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNUmnoxWPjSTjtHF98CMDmvUxmYCtvFaA0w&s',
      price: '₹ 25000',
      type: 'Electronics',
      name: 'Lenovo Tab M10',
      date: 'Fri Mar 14 2022',
    },
    {
      id: 12,
      imageSrc: 'https://financialexpresswpcontent.s3.amazonaws.com/uploads/2020/02/honda-activa-6g-2.jpg',
      price: '₹ 60000',
      type: 'Two Wheeler',
      name: 'Honda Activa 6G',
      date: 'Fri Apr 15 2022',
    }
  ];

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };



  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((post) => (
            <div
              key={post.id}
              className="card"
              onClick={() => {
                if (isAuthenticated) {
                  setPostDetails(post);
                  navigate('/viewPost');
                } else {
                  alert('Please login to view this post');
                  // navigate('/login');
                }
              }}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={post.url[0]} alt={post.name} />
              </div>
              <div className="content">
                <p className="rate">₹{post.price}</p>
                <span className="kilometer">{post.name}</span>
                <p className="name">{post.description}</p>
              </div>
              <div className="date">
                {/* <span>{post.createdAt}</span> */}
                <span>{new Date(post.createdAt).toDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="card"
              onClick={() => {
                if (isAuthenticated) {
                  setPostDetails(post);
                  navigate('/viewPost');
                } else {
                  alert('Please login to view this post');
                  // navigate('/login');
                }
              }}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={post.url[0]} alt={post.name} />
              </div>
              <div className="content">
                <p className="rate">₹{post.price}</p>
                <span className="kilometer">{post.category}</span>
                <p className="name">{post.name}</p>
              </div>
              <div className="date">
                {/* <span>{post.createdAt}</span> */}
                <span>{new Date(post.createdAt).toDateString()}</span>
              </div>
            </div>
          ))}
        </div>
        {visiblePosts < products.length && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="loadmore-button" onClick={loadMore}><b>Load More</b></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
