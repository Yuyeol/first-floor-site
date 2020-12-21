import CurrLocation from "Components/CurrLocation";
import Poster from "Components/LookBookSection/Poster";
import Section from "Components/LookBookSection/Section";

const LookBookPresenter = ({ location, posters }) => (
  <>
    <CurrLocation location={location} />
    <Section>
      {posters.map((poster) => (
        <Poster
          imgUrl={poster.imgUrl}
          title={poster.title}
          writer={poster.writer}
          date={poster.date}
        />
      ))}
    </Section>
  </>
);

export default LookBookPresenter;
