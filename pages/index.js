import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = ({events}) => {
  return (
      <div>
        <EventList
            items={events}
        />
      </div>
  )
}

export const getStaticProps = async () => {
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }

}

export default HomePage
