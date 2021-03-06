import axios from 'axios';
import request from '../utils/request'

const ajax = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

ajax.defaults.withCredentials = true;

let base = '/api';

let front = 'http://wxsportscard.upc.edu.cn/'

if (process.env.NODE_ENV === 'development') {
    front = 'http://localhost:8000/'
}

export const fronturl = front;
export const qrBase = 'http://qr.liantu.com/api.php?&w=200&text=';
export const uploadurl = `${base}/admin/uploadfile`;

export const auth = params => {
    const options = {
        path: `${base}/auth`,
        method: 'POST',
        needAuth: false,
        params,
    }
    return request(options)
};

export const create = params => {
    return ajax.post(`${base}/manage/create`, JSON.stringify(params)).then(res => res.data);
};

export const edit = params => {
    return ajax.post(`${base}/manage/edit`, JSON.stringify(params)).then(res => res.data);
};


export const deletePayment = params => {
    return ajax.post(`${base}/manage/delete`, JSON.stringify(params)).then(res => res.data);
};

export const level = params => {
    return ajax.get(`${base}/manage/level`, {params: params}).then(res => res.data);
};

export const getOne = params => {
    return ajax.get(`${base}/manage/getOne`, {params: params}).then(res => res.data);
};

export const addAdmin = params => {
    return ajax.post(`${base}/manageadmin/addManage`, JSON.stringify(params)).then(res => res.data);
};


export const deleteManage = params => {
    return ajax.post(`${base}/manageadmin/deleteManage`, JSON.stringify(params)).then(res => res.data);
};

export const getAdminList = params => {
    return ajax.get(`${base}/manageadmin/adminList`, {params: params}).then(res => res.data);
};

export const getBillRequest = params => {
    return ajax.get(`${base}/manageadmin/getBill`, {params: params}).then(res => res.data);
};

export const deletBillRequest = params => {
    return ajax.post(`${base}/manageadmin/deleteBill`, JSON.stringify(params)).then(res => res.data);
};


export const getPaymentPageData = params => {
    return ajax.get(`${base}/pay/getPaymentPageData`, {params: params}).then(res => res.data);
};


export const allBill = params => {
    return ajax.get(`${base}/pay/allBill`, {params: params}).then(res => res.data);
};


export const getPaymentData = params => {
    return ajax.post(`${base}/pay/getPaymentData`, JSON.stringify(params)).then(res => res.data);
};


export const requestLogin = params => {
    const options = {
        path: `${base}/login`,
        method: 'POST',
        needAuth: false,
        params,
    }
    return request(options);
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};


export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

