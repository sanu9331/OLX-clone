import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from "../../store/FirebaseContext";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { isAuthenticated } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date();
  const navigate = useNavigate();

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log('url:', url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId: isAuthenticated.uid,
          createdAt: date.toDateString()
        })
        navigate('/');
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname" >Price</label>
          <br />
          <input className="input" type="number" id="fname" value={price}
            onChange={(e) => setPrice(e.target.value)} name="Price" />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>

        </div>
      </card>
    </Fragment >
  );
};

export default Create;
