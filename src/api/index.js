//输出通用axios实例
import axios from 'axios';
const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});
//文件类型
// const instupload = axios.create({
//   timeout: 10000,
//   headers: {
//     'Content-Type': "multipart/form-data"
//   }
// });

export default{
	getDocById ( data ) {
	  return instance.get('/api/doc/110');
	}
}