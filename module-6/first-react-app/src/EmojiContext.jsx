import { useState, createContext } from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState('😊'); 

    const changeMood = () => {
        if (mood === '😊') {
            setMood('😉');
        } else {
            setMood('😞');
        }
    };

    return (
        <MoodContext.Provider value={{ mood, changeMood }}>
            {children}
        </MoodContext.Provider>
    );
};