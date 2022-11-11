import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const FileUpload = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'http://localhost:5000/my-uploads/yasuo.jpg',
    // },
    // {
    //   uid: '-2',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },    
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = (obj) => {
    console.log('obj :: ', obj, typeof obj);
    // setFileList(newFileList);
  };
  useEffect(() => {
    callGetImageApi();
  }, [])

  const callGetImageApi = async () => {
    await axios.get('/my-uploads').then( res => {
      console.log("all image req :: ", res);

      if (res.status === 200) {
        const result = res.data?.map( i => {

          const cookedPath = i.path.split('/');
          const imageName = cookedPath[cookedPath.length - 1];

          console.log("cookedPath :: ", cookedPath);
          console.log("imageName :: ", imageName);

          return {
            name: imageName,
            status: 'done',
            url: `http://localhost:5000${i.path}`,
          }
        })
        console.log("result :: ", result)
        setFileList([...fileList, ...result]);
      }

    });
  }

  const callUploadApi = async (req) => {
    // status: uploading
    let formData = new FormData();    
    formData.append("file", req.file);
    await axios.post('/upload', formData).then( res => {
      console.log("res :: ", res)
      if (res.status === 200) {
        const data = res.data;
        // status: done
        // callGetImageApi(res)
        setFileList([ ...fileList, {
          name: data.originalname,
          status: 'done',
          url: `http://localhost:5000/${data.destination}/${data.originalname}`,
        }]);
      } 
      else {
        // status: error
        setFileList([ ...fileList, {
          name: 'image.png',
          status: 'error',
        }]);
        throw new Error({
          status: res.status,
          statusText: res.statusText
        });
      }
    });
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        // action="http://localhost:3000/upload"
        customRequest={callUploadApi}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{width: '100%'}}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default FileUpload;