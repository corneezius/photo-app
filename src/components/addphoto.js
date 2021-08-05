import React, { useState, useEffect } from "react";
import ImgCrop from 'antd-img-crop';
import { Form, Input, Upload, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import Resizer from "react-image-file-resizer";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

function AddPhoto(props) {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  async function handleSubmit(event) {
    event.preventDefault()
    const description = event.target.elements.description.value
    let element = fileList[0]
    if(element){
      await Resizer.imageFileResizer(
        fileList[0].originFileObj,
        600,
        600,
        "PNG",
        75,
        0,
        (uri) => {
          // images.push(uri)
          let ran = Math.floor(Math.random() * 100000);
          const uploadTask = firebase.storage().ref(`/images/${element.name}${ran}`).putString(uri, 'data_url')
          // .put(imageResize)
          uploadTask.on('state_changed',
            (snapShot) => {
            }, (err) => {
              //catches the errors
              console.log(err)
            }, () => {
              // gets the functions from storage refences the image storage in firebase by the children
              // gets the download url then sets the image from firebase as the value for the imgUrl key:
              firebase.storage().ref('images').child(element.name + ran).getDownloadURL()
                .then(fireBaseUrl => {
                  const post = {
                    id: Number(new Date()),
                    description: description,
                    imageLink: fireBaseUrl
                  }
                  if (description && fireBaseUrl) {
                    props.startAddingPost(post)
                    props.onHistory.push("/")
                  }
                })
            })
        },
        "base64",
        300,
        300
      );
    }else{
      alert("Select Image")
    }
  }
  // render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="description" name="description" />
            <ImgCrop quality={0.2} aspect={5 / 4} rotate>
              <Upload
                style={{ display: 'flex', justifyContent: 'center' }}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
            <button>Post</button>
          </form>
        </div>
      </div>
    )
  // }
}

export default AddPhoto;
