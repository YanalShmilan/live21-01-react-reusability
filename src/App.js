import InstructorTag from './components/InstructorTag';
import { AppWrapper } from './styles';

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorTag emoji="🌚" name="Hamza" github="DarthHamza" />

      <InstructorTag emoji="🐥" name="Laila" github="Lailz" />

      <InstructorTag emoji="🦍" name="Hasan" github="thehasanas" />
    </AppWrapper>
  );
};

export default App;
