import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
            'Bearer 6wD5FJO5lo0jxwqHvnY-NIBeVs5akdO4L9WVnOy1tC2JC3801HAeVo5_60GjON7RAimcwUyxewIkRgaECW45svfw9uUpSTRsy61CEQoK-hNFhwa5BjEjK8zXCj8BX3Yx'
    }
});
