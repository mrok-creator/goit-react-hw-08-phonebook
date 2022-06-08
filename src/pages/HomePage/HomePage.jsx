import Section from 'shared/components/Section';

import s from './homePage.module.css';

const HomePage = () => {
  <Section title="Your incredible tool to manage your contacts">
    <img
      src={`https://images.unsplash.com/photo-1543244916-b3da1ba6252c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmUlMjBib29rfGVufDB8fDB8fA%3D%3D&w=1000&q=80`}
      alt="Phone book poster"
      className={s.poster}
    />
  </Section>;
};

export default HomePage;
