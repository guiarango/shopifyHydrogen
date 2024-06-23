import React, {useState, useEffect} from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    {to: '#', message: 'Mensaje 1'},
    {to: '#', message: 'Mensaje 2'},
  ];

  const animationDuration = 6; // Duration in seconds for each message

  useEffect(() => {
    // Function to automatically transition to the next message
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1,
      );
    }, animationDuration * 1000); // Convert duration to milliseconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [messages, animationDuration]);

  return (
    <div className={styles.slider}>
      <ul className={styles.list}>
        {messages.map((message, index) => (
          <li
            key={index}
            className={`${styles.item} ${
              index === currentMessageIndex ? styles.active : ''
            }`}
          >
            <a href={message.to}>{message.message}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
