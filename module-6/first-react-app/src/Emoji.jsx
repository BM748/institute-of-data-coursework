
import { useMood } from './useMood';

function EmojiChanger() {
    const { mood, changeMood } = useMood();

    return (
        <div>
            <button onClick={changeMood}>Change Mood</button>
            <div>Current Mood: {mood}</div>
        </div>
    );
}

export default EmojiChanger;