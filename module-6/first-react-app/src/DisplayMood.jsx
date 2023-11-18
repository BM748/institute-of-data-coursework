
import { useMood } from './useMood';

function DisplayMood() {
    const { mood } = useMood();

    return <div>Current Mood: {mood}</div>;
}

export default DisplayMood;