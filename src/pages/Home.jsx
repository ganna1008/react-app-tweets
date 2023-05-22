import { TextHome, HeaderHome, ImageHome } from '../components/App.styled';

const Home = () => {
  return (
    <main>
      <HeaderHome>Welcome</HeaderHome>
      <ImageHome
        src="https://ukraineverstehen.de/wp-content/uploads/shutterstock_1049176127-e1537001451192.jpg"
        alt="Ukraine"
      />
      <TextHome>
        <b>Ukraine</b> is a country in Eastern Europe. It is the second-largest European country
        after Russia, which it borders to the east and northeast. It is also bordered by Belarus to
        the north; by Poland, Slovakia, and Hungary to the west; and by Romania and Moldova to the
        southwest; with a coastline along the Black Sea and the Sea of Azov to the south and
        southeast. Kyiv is the nation's capital and largest city, followed by Dnipro, Kharkiv, and
        Odesa. Ukraine's official language is Ukrainian; Russian is also widely spoken, especially
        in the east and south.
      </TextHome>
    </main>
  );
};

export default Home;
