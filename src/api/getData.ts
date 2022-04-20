import axios from '@/utils/serve';
// 数据列表接口

export const getList = () => axios.get('/list');
