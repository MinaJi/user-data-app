import Card from "../components/Card";
import { useUserState } from "../context/UserContext";

function Main() {
  const state = useUserState();

  console.log(state);
  
  return (
    <div>
      Main
      <div>
        <Card userId={0} displayName={"지민아"} mbti={""} bio={""} />
      </div>
    </div>
  );
}

export default Main;
