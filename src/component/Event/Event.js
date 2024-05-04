import Eventcontent from "../Event/Eventcontent";
import styles from './Event.module.css';
import Eventbox from "./Eventbox";
import Leftbox from "./leftbox";
import { Link } from 'react-router-dom';
import eventData from './eventData';

const Event = () => {
  return (
    <div>
      <Eventcontent text={"Environmental event"} coment={"Home > Event"}>
      </Eventcontent>
      <div className={styles.homeone_box}>
        <div className={styles.left_column}>
          <div><Leftbox /></div>
        </div>
        <div className={styles.right_column}>
          <h2><br /></h2>
          {eventData.map((event) => (
            <div key={event.id} className={styles.small_box}>
              <Link to={`/events/${event.id}`} className={styles.link}>
                <img src={event.imageUrl} alt="Event Icon" className={styles.icon} />
                <Eventbox
                  year={event.year}
                  text={<span style={{ whiteSpace: 'pre' }}>{event.text}</span>}
                  explain={<span style={{ whiteSpace: 'pre' }}>{event.explain}</span>}
                  style={{ marginLeft: '20px' }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;