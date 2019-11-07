import React, { Component } from 'react';

import './style.css';

import PostItem from '../PostItem';

class PostList extends Component {
  state = { 
    posts: [
      {
        id: 1,
        author: {
          name: "Rayne Gomes",
          avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-1/p40x40/72222825_2447848248821551_4554082999385194496_n.jpg?_nc_cat=110&_nc_oc=AQkxlqB0A-DBg6HfsZx9ssA9__7BBsDnpSJENAd9bWWDJjlKcaKX1kG4IIu1sMFv5wA&_nc_ht=scontent.fudi1-2.fna&oh=5c7c0688296a6f79392864183da73821&oe=5E42AEB3"
        },
        date: "02 nov 2019",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non in recusandae fuga quasi ea soluta. Aliquam, explicabo nobis earum, voluptatum molestias soluta, dolore reprehenderit laudantium quasi commodi numquam in assumenda.",
        comments: [
          {
            id: 1,
            author: {
              name: "Administrador",
              avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t31.0-1/c15.0.50.50a/p50x50/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQkkyGPyzNO2oClM29186kpzUXzF5qaOjX9ez9o9BpEqfNhZeP9UQxYjK30xAfCpsHg&_nc_ht=scontent.fudi1-2.fna&oh=6cd1413075cb28f698458dfc72a6cc1a&oe=5E5D2D3F"
            },
            date: "03 nov 2019",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum non. Obcaecati, voluptas deleniti impedit optio porro libero repellat? Laboriosam accusamus voluptatum recusandae tempora, asperiores voluptates eum rerum veniam fuga!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mark Zuckerberg",
          avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t34.0-1/p50x50/16176889_112685309244626_578204711_n.jpg?_nc_cat=1&_nc_oc=AQkS56vwjny3ctn1MAFZUJpz6ViF0-RuVYcsh3Vc-1GfJLYlGR9YVt030VD5hPqGf60&_nc_ht=scontent.fudi1-2.fna&oh=80db45d85a13deb25fff4ed4ea81b0aa&oe=5DC731DE"
        },
        date: "06 nov 2019",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non in recusandae fuga quasi ea soluta. Aliquam, explicabo nobis earum, voluptatum molestias soluta, dolore reprehenderit laudantium quasi commodi numquam in assumenda.",
        comments: [
          {
            id: 1,
            author: {
              name: "John Doe",
              avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t31.0-1/c15.0.50.50a/p50x50/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQkkyGPyzNO2oClM29186kpzUXzF5qaOjX9ez9o9BpEqfNhZeP9UQxYjK30xAfCpsHg&_nc_ht=scontent.fudi1-2.fna&oh=6cd1413075cb28f698458dfc72a6cc1a&oe=5E5D2D3F"
            },
            date: "07 nov 2019",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum non. Obcaecati, voluptas deleniti impedit optio porro libero repellat? Laboriosam accusamus voluptatum recusandae tempora, asperiores voluptates eum rerum veniam fuga!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Bill Gates",
          avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-1/p50x50/23473074_10155031875776961_8482140412038626648_n.jpg?_nc_cat=1&_nc_oc=AQmaR5TW6AkCRz3eNOlkYB99wHPoVugUHXkv5HVpPOvdXyDl8o4a_8DEYc4wFni5qEg&_nc_ht=scontent.fudi1-2.fna&oh=dd13a1889bae4af27e1f52b1e3289258&oe=5E52C02A"
        },
        date: "06 nov 2019",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non in recusandae fuga quasi ea soluta. Aliquam, explicabo nobis earum, voluptatum molestias soluta, dolore reprehenderit laudantium quasi commodi numquam in assumenda.",
        comments: [
          {
            id: 1,
            author: {
              name: "Melina Gates",
              avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-1/p50x50/44597002_2469003709989878_1584605433417433088_o.jpg?_nc_cat=1&_nc_oc=AQmKtgmvBg9u_WqpCikYbFsw2pW6h7WlIV2syNxXYrm3DZawMH-WkoC62SmAK1w0-DM&_nc_ht=scontent.fudi1-2.fna&oh=1f64e7d10605c6c751754b06003e7f24&oe=5E60E388"
            },
            date: "07 nov 2019",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum non. Obcaecati, voluptas deleniti impedit optio porro libero repellat? Laboriosam accusamus voluptatum recusandae tempora, asperiores voluptates eum rerum veniam fuga!"
          },
          {
            id: 2,
            author: {
              name: "Forbes",
              avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-1/p40x40/50813627_10157101876612509_8264332807757627392_n.jpg?_nc_cat=1&_nc_oc=AQkBKTmOYyZtbc-RriCm6QaFh_QFVJxLYBOJVozKuPsQplx9vqHaO-bMcj_VUYbEJeI&_nc_ht=scontent.fudi1-2.fna&oh=29b002c05222dc5abd4e135c05659cc7&oe=5E4CF06F"
            },
            date: "07 nov 2019",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum non. Obcaecati, voluptas deleniti impedit optio porro libero repellat? Laboriosam accusamus voluptatum recusandae tempora, asperiores voluptates eum rerum veniam fuga!"
          },
          {
            id: 3,
            author: {
              name: "Microsoft",
              avatar: "https://scontent.fudi1-1.fna.fbcdn.net/v/t1.0-1/p50x50/48379077_1857402604368250_4972068830084857856_n.png?_nc_cat=104&_nc_oc=AQnzYUAlbDH4EDqIIiw6At5xCROnj_8COuDsFPrDtnJFrdTX5Ih63gHrUUzYs9rVKvI&_nc_ht=scontent.fudi1-1.fna&oh=430baf59836523400462784a4b3a10a4&oe=5E6492B9"
            },
            date: "07 nov 2019",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolorum non. Obcaecati, voluptas deleniti impedit optio porro libero repellat? Laboriosam accusamus voluptatum recusandae tempora, asperiores voluptates eum rerum veniam fuga!"
          }
        ]
      },
    ]
  }

  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(post => <PostItem key={post} data={post} />)}
      </ul>
    );
  }
}

export default PostList;