import axios from '@/plugins/axios';


const getRecommend = () => {
  return axios({
    url: '/tabs/selected',
    method: "GET"
  })
}

export default {
  getRecommend
}