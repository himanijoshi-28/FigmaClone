import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";

export default function Page() {
  return (
    <Room>
      <CollaborativeApp />  {/*Any feature that uses colaborative functionalities  */}
    </Room>
  );
}