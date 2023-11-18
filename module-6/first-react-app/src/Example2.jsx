import  { useState, useEffect } from "react";

function ActivityFinder2() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState('');

  useEffect(() => {
    let ignore = false; // Flag to allow ignoring of the fetch result

    const fetchActivity = async () => {
      try {
        const response = await fetch(`https://www.boredapi.com/api/activity?participants=${participants}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        // Only update state if the effect is still valid
        // i.e., the dependency hasn't changed since the request
        if (!ignore) {
          setActivity(json.activity);
        }
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    };

    fetchActivity();

    // Cleanup function - runs when unmounted or dependencies change
    return () => {
      ignore = true; // Ignore now invalid fetch results
      console.log('Cleanup effect');
    };
  }, [participants]); // Effect dependencies

  // Render the component with the current activity state
  return (
    <div>
      <p>Participants: {participants}</p>
      <button onClick={() => setParticipants(participants + 1)}>Increase Participants</button>
      <p>Activity: {activity}</p>
    </div>
  );
}

export default ActivityFinder2;
